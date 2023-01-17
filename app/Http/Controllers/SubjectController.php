<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function getSubjects() {
        try {
            $res = DB::table('subjects')->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveSubject() {
        try {
            $data = request()->data;
            extract($data);

            if(
                DB::table('subjects')
                    ->where('subject_code', $subject_code)
                    ->orWhere('subject_name', $subject_name)
                    ->exists()
            ) {
                return response()->json('Subject code/name already exists', 500);
            } else {
                DB::table('subjects')->insert([
                    'subject_code'=>$subject_code,
                    'subject_name'=>$subject_name,
                    'subject_description'=>$subject_description,
                    'subject_type'=>$subject_type,
                ]);
            }
            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteSubject() {
        try {
            $id = request()->id;
            DB::table('subjects')->where('id',$id)->delete();
            return response()->json('Subject Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
}
