<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdviserEnrollmentController extends Controller
{
    public function getSections() {
        try {
            $sy_id = request()->sy_id;
            $adviser_id = request()->adviser_id;

            $res = DB::table('enrollment_head')
                ->select(
                    'enrollment_head.*',
                    'sections.grade',
                    'sections.level',
                    'sections.section',
                )

                ->join('sections','sections.id', 'enrollment_head.section_id')

                ->where('enrollment_head.sy_id', $sy_id)
                ->where('enrollment_head.adviser_id', $adviser_id)

                ->get();

            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function getStudentsForEnrollment() {
        try {
            $grade = request()->grade;
            $prevSYid = request()->prevSYid;
            $activeSYid = request()->activeSYid;

            if($grade != null) {
                $res = DB::table('students')
                    ->where('is_enrolled',0)
                    // ->select('students.*','sections.grade','enrollment_line.final_remarks')
                    // ->leftJoin('enrollment_line', 'enrollment_line.student_id','students.id')
                    // ->leftJoin('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                    // ->leftJoin('sections','sections.id','enrollment_head.section_id')


                    // ->orWhere(function($q) use($activeSYid){
                    //     $q->whereRaw('enrollment_line.student_id IS NULL')
                    //     ->where('enrollment_head.sy_id',"=",$activeSYid)
                    //     ;
                    // })

                    // ->orWhere(function($q) use($prevSYid, $grade){
                    //         $q->whereRaw('enrollment_line.student_id IS NOT NULL')
                    //         ->where('enrollment_head.sy_id', $prevSYid)
                    //         ->where(function($q2) use($grade){
                    //             $arrG = ['Nursery','Kinder 1','Kinder 2',
                    //                 'Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6',
                    //                 'Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'
                    //             ];
                    //             for($i=1; $i<count($arrG); $i++) {
                    //                 $q2->when($grade==$arrG[$i-1], function($q) use($grade, $arrG, $i){
                    //                     $q->where('enrollment_line.final_remarks',"=","failed")
                    //                         ->where('sections.grade',$grade)
                    //                     ;
                    //                 });
                    //             }
                    //         })
                    //         ;
                    // })
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
            // dd($head);
            extract($head);
            $line = request()->line;

            $head_id = DB::table('enrollment_head')
                ->where('sy_id', $sy_id)
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

            $added = 0;
            $existing = 0;
            foreach($line as $student_id) {
                $occurence = DB::table('enrollment_line')
                    ->join('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                    ->where('enrollment_head.sy_id', $sy_id)->where('enrollment_line.student_id',$student_id)
                    ->count()
                    ;
                // dd($test);
                if(
                    // DB::table('enrollment_line')->where('head_id',$head_id)
                    //     ->where('student_id',$student_id)->exists()
                    $occurence > 0
                ) {
                    $existing += 1;
                } else {
                    DB::table('enrollment_line')->insert([
                        'head_id'=>$head_id,
                        'student_id'=>$student_id,
                    ]);
                    // DB::table('students')->where('id',$student_id)->update([
                    //     'current_grade' => $grade,
                    //     'last_syid' => $sy_id,
                    //     'last_grade' => $grade,
                    //     'last_final_remarks' => 'pending',
                    // ]);
                    DB::table('students')->where('id',$student_id)->update(['is_enrolled' => 1]);
                    $added += 1;
                }
            }
            $total=$added+$existing;
            // $msg = "Added $added of $total selected, $existing existing";
            $msg = "Added $added of $total selected students";

            return response()->json($msg, 200);
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
