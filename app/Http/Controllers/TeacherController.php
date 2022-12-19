<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    public function getTeachers() {
        try {
            $res = DB::table('teachers')->latest()->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveTeacher() {
        try {
            $form = request()->data;
            extract($form);

            // check if student already exists
            if(DB::table('teachers')->where('firstname',$firstname)
                ->where('middlename',$middlename)
                ->where('lastname',$lastname)
                ->exists()
            ) {
                return response()->json('Teacher already exists', 303);
            }

            DB::table('teachers')->insert([
                'firstname'=>$firstname,
                'middlename'=>$middlename,
                'lastname'=>$lastname,
                'gender'=>$gender,
                'address'=>$address,
            ]);
            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteTeacher() {
        try {
            $id = request()->id;
            DB::table('teachers')->where('id',$id)->delete();
            return response()->json('Teacher Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


}
