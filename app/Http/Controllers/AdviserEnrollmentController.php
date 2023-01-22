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
                    'sections.level',
                    'sections.grade',
                    'sections.section',
                )
                ->distinct('enrollment_head.id')

                ->join('sections','sections.id', 'enrollment_head.section_id')
                ->join('enrollment_line','enrollment_line.head_id','enrollment_head.id')
                ->where('enrollment_head.sy_id', $sy_id)
                ->where('enrollment_head.adviser_id', $adviser_id)

                ->get();

            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function getSectionDetails() {
        try {
            $head_id = request()->head_id;
            $res=DB::table('enrollment_head')
                ->select(
                    'enrollment_head.*',
                    'sections.level',
                    'sections.grade',
                    'sections.section',
                    'advisers.firstname as adviser_firstname',
                    'advisers.middlename as adviser_middlename',
                    'advisers.lastname as adviser_lastname'
                )
                ->join('sections','sections.id','enrollment_head.section_id')
                ->join('advisers','advisers.id','enrollment_head.adviser_id')
                ->where('enrollment_head.id', $head_id)
                ->where('enrollment_head.adviser_id', auth()->user()->adviser_id)
                ->get()->first();
            return response()->json($res,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }

    }

    public function getStudents() {
        try {
            $head_id = request()->head_id;
            $res=DB::table('enrollment_line')
                ->select('enrollment_line.*',
                    'students.lrn',
                    'students.firstname',
                    'students.middlename',
                    'students.lastname',
                    'students.gender',
                )
                ->join('students','students.id','enrollment_line.student_id')
                ->join('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                ->where('enrollment_line.head_id', $head_id)
                ->where('enrollment_head.adviser_id', auth()->user()->adviser_id)
                ->get();
            return response()->json($res,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }

    }

    public function getSubjects() {
        try {
            $ELID = request()->enrollment_line_id;
            $res = DB::table('grades')
                ->select('grades.*',
                    'subjects.subject_name'
                )
                ->join('subjects','subjects.id','grades.subject_id')
                ->where('grades.enrollment_line_id', $ELID)
                ->get();

            return response()->json($res,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }
    }

    public function updateGrades() {
        try {
            $subjects = request()->subjects;
            $level = request()->level;
            $adviser_name = request()->adviser_name;
            $sy_id = request()->sy_id;

            // get passing grade
            $passing_grade = DB::table('defaults')->where('setting_name','passing_grade')
                ->pluck('setting_value')->first();
            $passing_grade = floatval($passing_grade);
            // dd($passing_grade);

            foreach($subjects as $s) {

                // grade calc for non senior high
                if($level != 'Senior High') {
                    $first = $s['first'] ?? 0;
                    $second = $s['second'] ?? 0;
                    $third = $s['third'] ?? 0;
                    $fourth = $s['fourth'] ?? 0;
                    $final = ($first+$second+$third+$fourth) / 4;
                    $remarks='';
                    if($final < $passing_grade) {
                        $remarks = 'FAILED';
                    } else {
                        $remarks = 'PASSED';
                    }

                    DB::table('grades')
                    ->where('id',$s['id'])
                    ->update([
                        'first'=>$s['first'],
                        'second'=>$s['second'],
                        'third'=>$s['third'],
                        'fourth'=>$s['fourth'],
                        'final'=> $final,
                        'remarks'=>$remarks
                    ]);
                } else if($level == 'Senior High') {
                    if($s['sem']==1) {
                        $first = $s['first'] ?? 0;
                        $second = $s['second'] ?? 0;
                        $final = ($first+$second) / 2;
                        $remarks='';
                        if($final < $passing_grade) {
                            $remarks = 'FAILED';
                        } else {
                            $remarks = 'PASSED';
                        }

                        DB::table('grades')
                        ->where('id',$s['id'])
                        ->update([
                                'first'=>$s['first'],
                                'second'=>$s['second'],
                                'final'=> $final,
                                'remarks'=>$remarks
                            ]);
                    } else if($s['sem']==2) {
                        $third = $s['third'] ?? 0;
                        $fourth = $s['fourth'] ?? 0;
                        $final = ($third+$fourth) / 2;
                        $remarks='';
                        if($final < $passing_grade) {
                            $remarks = 'FAILED';
                        } else {
                            $remarks = 'PASSED';
                        }

                        DB::table('grades')
                        ->where('id',$s['id'])
                        ->update([
                                'third'=>$s['third'],
                                'fourth'=>$s['fourth'],
                                'final'=> $final,
                                'remarks'=>$remarks
                            ]);
                    }
                }
            }

            $student = DB::table('enrollment_line')
                ->select('students.firstname','students.middlename','students.lastname')
                ->join('students','students.id','enrollment_line.student_id')
                ->where('enrollment_line.id',$subjects[0]['enrollment_line_id'])
                ->get()->first();
            $student_name = $student->firstname. " ". $student->lastname;

            DB::table('notifications')->insert([
                'sy_id'=>$sy_id,
                'message'=>"$adviser_name updated $student_name's grade"
            ]);

            return response()->json('Done',200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }
    }




}
