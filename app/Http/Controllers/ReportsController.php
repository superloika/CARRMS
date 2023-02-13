<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportsController extends Controller
{
    public function studentEnrollment() {
        try {
            $sy_id = request()->sy_id;
            $level = request()->level;
            $grade = request()->grade;

            $res = DB::table('enrollment_line')
                ->select(
                    'sections.level',
                    'sections.grade',
                    'sections.section',
                    'students.firstname as student_firstname',
                    'students.middlename as student_middlename',
                    'students.lastname as student_lastname',
                    'students.extname as student_extname',
                    'students.gender',
                    'advisers.firstname as adviser_firstname',
                    'advisers.middlename as adviser_middlename',
                    'advisers.lastname as adviser_lastname',
                    'strands.strand_name',
                    'schoolyears.sy',
                )

                ->join('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                ->join('sections','sections.id','enrollment_head.section_id')
                ->join('students','students.id','enrollment_line.student_id')
                ->leftJoin('strands','strands.id','enrollment_line.strand_id')
                ->join('advisers','advisers.id','enrollment_head.adviser_id')
                ->join('schoolyears','schoolyears.id','enrollment_head.sy_id')

                ->where('enrollment_head.sy_id', $sy_id)
                ->where('sections.level', $level)
                ->when($grade != '', function($q) use($grade){
                    $q->where('sections.grade', $grade);
                })
                ->get();

            $data = [];

            foreach($res as $r) {
                if($r->strand_name != null || $r->strand_name != '') {
                    // $data[$r->grade. '-'. $r->section][$r->strand_name][$r->gender][] = $r;
                    $data[$r->grade. '-'. $r->section][$r->gender][] = $r;
                } else {
                    $data[$r->grade. '-'. $r->section][$r->gender][] = $r;
                }
            }

            return response()->json($data,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }
    }


    public function permaRecord() {
        try {
            $level = request()->level;
            $student_id = request()->student_id;

            $data = [];

            $student = DB::table('students')->where('id',$student_id)->first();
            $data['profile'] = $student;

            $scholasticRec = DB::table('enrollment_line')
                ->select('enrollment_line.*',
                    'sections.grade',
                    'schoolyears.sy',
                    'advisers.firstname as adviser_firstname',
                    'advisers.middlename as adviser_middlename',
                    'advisers.lastname as adviser_lastname',
                    'sections.section',
                    'sections.level',
                    'strands.strand_name',
                )
                ->join('students','students.id','enrollment_line.student_id')
                ->join('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                ->join('sections','sections.id','enrollment_head.section_id')
                ->join('advisers','advisers.id','enrollment_head.adviser_id')
                ->join('schoolyears','schoolyears.id','enrollment_head.sy_id')
                ->leftJoin('strands','strands.id','enrollment_line.strand_id')

                ->where('students.id', $student_id)
                ->where('sections.level', $level)
                ->get();

            for($i=0;$i < count($scholasticRec); $i++) {
                $subjects = DB::table('grades')
                    ->select('grades.*',
                    'subjects.subject_name','subjects.subject_type')
                    ->join('subjects','subjects.id','grades.subject_id')
                    ->where('enrollment_line_id', $scholasticRec[$i]->id)
                    ->orderBy('subjects.subject_type')
                    ->get();

                if($level=='Senior High') {
                    foreach($subjects as $s) {
                        $scholasticRec[$i]->subjects[$s->sem][] = $s;
                    }
                } else {
                    $scholasticRec[$i]->subjects = $subjects;
                }
            }

            $data['scholasticRec'] = $scholasticRec;

            return response()->json($data,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }
    }


    public function generateCOE() {
        try {
            $student_id = request()->student_id;

            $student = DB::table('enrollment_line')
                ->select(
                    'enrollment_line.*',
                    'sections.grade',
                    'schoolyears.sy',
                    'students.firstname as student_firstname',
                    'students.middlename as student_middlename',
                    'students.lastname as student_lastname'
                )
                ->join('enrollment_head','enrollment_head.id','enrollment_line.head_id')
                ->join('schoolyears','schoolyears.id','enrollment_head.sy_id')
                ->join('sections','sections.id','enrollment_head.section_id')
                ->join('students','students.id','enrollment_line.student_id')
                ->where('enrollment_line.student_id', $student_id)
                ->orderBy('enrollment_line.id','DESC')
                ->get()
                ->first();

            // dd($student);

            return response()->json($student,200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(),500);
        }
    }

}
