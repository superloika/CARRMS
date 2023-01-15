<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EnrollmentController extends Controller
{
    public function getStudentsEnrolled() {
        try {
            $sy_id = request()->sy_id;
            $section_id = request()->section_id;
            $level = request()->level;
            // dd($level);

            $res = DB::table('enrollment_head')
                ->select(
                    'students.lrn as student_lrn',
                    'students.firstname as student_firstname',
                    'students.middlename as student_middlename',
                    'students.lastname as student_lastname',
                    'students.extname as student_extname',
                    'sections.grade',
                    'sections.section',
                    'advisers.firstname as adviser_firstname',
                    'advisers.middlename as adviser_middlename',
                    'advisers.lastname as adviser_lastname',
                    'enrollment_line.final_remarks',
                )

                ->join('enrollment_line','enrollment_line.head_id','enrollment_head.id')
                ->join('students','students.id', 'enrollment_line.student_id')
                ->join('sections','sections.id', 'enrollment_head.section_id')
                ->join('advisers','advisers.id', 'enrollment_head.adviser_id')
                ->join('schoolyears','schoolyears.id', 'enrollment_head.sy_id')

                ->where('enrollment_head.sy_id', $sy_id)
                ->when($section_id!=null, function($q) use($section_id){
                    $q->where('enrollment_head.section_id', $section_id);
                })

                ->when($level!=null, function($q) use($level){
                    $q->where('sections.level', $level)
                    ;
                })

                ->get();
                // ->latest('enrollment_head.created_at')->get();

            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


    // public function getStudentsForEnrollment() {
    //     try {
    //         $current_grade = request()->current_grade ?? '';
    //         if($current_grade != '') {
    //             $res = DB::table('students')
    //                 ->where(function($query) use($current_grade){
    //                     $arrG = ['Preschool','Kinder 1','Kinder 2',
    //                         'Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6',
    //                         'Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'
    //                     ];
    //                     for($i=1; $i<count($arrG); $i++) {
    //                         $query->when($current_grade==$arrG[$i], function($q) use($current_grade, $arrG, $i){
    //                             $q->where('current_grade',$arrG[$i-1])
    //                                 ->orWhere('current_grade',$current_grade)
    //                                 ;
    //                         });
    //                     }
    //                 })
    //                 ->orWhere('current_grade','')
    //                 ->latest()->get();


    //             return response()->json($res, 200);
    //         }
    //     } catch (\Throwable $th) {
    //         return response()->json($th->getMessage(), 500);
    //     }
    // }

    // public function getStudentsForEnrollment() {
    //     try {
    //         $grade = request()->grade;
    //         $prevSYid = request()->prevSYid;
    //         $activeSYid = request()->activeSYid;

    //         if($grade != null) {
    //             $res = DB::table('students')
    //                 ->select('students.*','sections.grade')
    //                 ->leftJoin('enrollment_line', 'enrollment_line.student_id','students.id')
    //                 ->leftJoin('enrollment_head','enrollment_head.id','enrollment_line.head_id')
    //                 ->leftJoin('sections','sections.id','enrollment_head.section_id')
    //                 ->where(function($q) use($activeSYid){
    //                     $q->whereRaw('enrollment_line.student_id IS NULL')
    //                     ->where('enrollment_head.sy_id')
    //                     ;
    //                 })
    //                 ->where(function($q){

    //                 })

    //                 ->get()
    //                 ;
    //             return response()->json($res, 200);
    //         }
    //     } catch (\Throwable $th) {
    //         return response()->json($th->getMessage(), 500);
    //     }
    // }

    public function getStudentsForEnrollment() {
        try {
            $grade = request()->grade;
            $prevSYid = request()->prevSYid;
            $activeSYid = request()->activeSYid;

            if($grade != null) {
                $res = DB::table('students')
                    ->select('students.*','sections.grade','enrollment_line.final_remarks')
                    ->leftJoin('enrollment_line', 'enrollment_line.student_id','students.id')
                    ->leftJoin('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                    ->leftJoin('sections','sections.id','enrollment_head.section_id')
                    ->whereRaw('enrollment_line.student_id IS NULL')

                    ->orWhere(function($q) use($activeSYid, $prevSYid, $grade){
                        // $q->whereRaw('enrollment_line.student_id IS NOT NULL')
                            // ->where(function($q) use($activeSYid, $prevSYid) {
                            // })
                            $q->where('enrollment_head.sy_id', $prevSYid)
                            ->where(function($q2) use($grade){
                                $arrG = ['Preschool','Kinder 1','Kinder 2',
                                    'Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6',
                                    'Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'
                                ];
                                for($i=0; $i<count($arrG); $i++) {
                                    $q2->when($grade==$arrG[$i-1], function($q) use($grade, $arrG, $i){
                                        $q->where('enrollment_line.final_remarks',"=","passed")
                                        ;
                                    });
                                }
                            })
                            ;
                    })

                    ->get()
                    ;
                return response()->json($res, 200);
            }
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


    public function saveStudentEnrollment() {
        try {
            $head = request()->head;
            extract($head);
            $line = request()->line;

            $head_id = DB::table('enrollment_head')->where('sy_id', $sy_id)
                ->where('adviser_id', $adviser_id)
                ->where('section_id', $section_id)
                ->pluck('id')->first();

            if($head_id==null) {
                $head_id = DB::table('enrollment_head')->insertGetId([
                    'sy_id'=> $sy_id,
                    'adviser_id'=> $adviser_id,
                    'section_id'=> $section_id,
                ]);
            }

            foreach($line as $student_id) {
                DB::table('enrollment_line')->insert([
                    'head_id'=>$head_id,
                    'student_id'=>$student_id,
                ]);
                DB::table('students')->where('id',$student_id)->update([
                    'current_grade' => $grade
                ]);
            }

            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    // public function deleteStudent() {
    //     try {
    //         $id = request()->id;
    //         DB::table('students')->where('id',$id)->delete();
    //         return response()->json('Student Deleted', 200);
    //     } catch (\Throwable $th) {
    //         return response()->json($th->getMessage(), 500);
    //     }
    // }


}
