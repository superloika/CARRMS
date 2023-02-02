<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubtagController extends Controller
{
    public function getSubtags() {
        try {
            $res = DB::table('subtags')
                ->select('subtags.*','subjects.subject_name','subjects.subject_type','strands.strand_name')
                ->leftJoin('subjects','subjects.id','subtags.subject_id')
                ->leftJoin('strands','strands.id','subtags.strand_id')
                ->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    // public function saveSubtag() {
    //     try {
    //         $data = request()->data;
    //         extract($data);
    //         $subject_id = $subject_id['id'];
    //         // dd($subject_id);

    //         if(
    //             DB::table('subtags')
    //                 ->where('grade', $grade)
    //                 ->where('level', $level)
    //                 ->where('subject_id', $subject_id)
    //                 ->where('strand_id', $strand_id)
    //                 ->where('sem', $sem)
    //                 ->exists()
    //         ) {
    //             return response()->json('Tagging already exists', 409);
    //         } else {
    //             DB::table('subtags')->insert([
    //                 'grade'=>$grade,
    //                 'level'=>$level,
    //                 'subject_id'=>$subject_id,
    //                 'strand_id'=>$strand_id,
    //                 'sem'=>$sem,
    //             ]);
    //         }
    //         return response()->json('Success', 200);
    //     } catch (\Throwable $th) {
    //         return response()->json($th->getMessage(), 500);
    //     }
    // }

    public function saveSubtag() {
        try {
            $data = request()->data;
            extract($data);
            // $subject_id = $subject_id['id'];
            // dd($subject_id);
            // $xxx = "";
            // dd($subject_id);
            foreach ($subject_id as $subject) {
                if(is_array($subject)) {
                    if(
                        DB::table('subtags')
                            ->where('grade', $grade)
                            ->where('level', $level)
                            ->where('subject_id', $subject['id'])
                            ->where('strand_id', $strand_id)
                            ->where('sem', $sem)
                            ->exists()
                    ) {
                        // return response()->json('Tagging already exists', 409);
                    } else {
                        DB::table('subtags')->insert([
                            'grade'=>$grade,
                            'level'=>$level,
                            'subject_id'=>$subject['id'],
                            'strand_id'=>$strand_id,
                            'sem'=>$sem,
                        ]);
                    }
                } else {

                }
            }

            return response()->json('Done', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteSubtag() {
        try {
            $id = request()->id;
            DB::table('subtags')->where('id',$id)->delete();
            return response()->json('Tagging removed', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
}
