<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function getStudents() {
        try {
            $res = DB::table('students')->latest()->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveStudent() {
        try {
            $form = request()->data;
            extract($form);

            // check if student already exists
            if(DB::table('students')->where('firstname',$firstname)
                ->where('middlename',$middlename)
                ->where('lastname',$lastname)
                ->exists()
            ) {
                return response()->json('Student already exists', 303);
            }

            DB::table('students')->insert([
                'firstname'=>$firstname,
                'middlename'=>$middlename,
                'lastname'=>$lastname,
                'extname'=>$extname,
                'gender'=>$gender,
                'dob'=>$dob,
                'pob'=>$pob,
                'address'=>$address,
                'guardian'=>$guardian,
                'guardian_address'=>$guardian_address,
            ]);
            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteStudent() {
        try {
            $id = request()->id;
            DB::table('students')->where('id',$id)->delete();
            return response()->json('Student Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


}
