<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdviserController extends Controller
{
    public function getAdvisers() {
        try {
            $res = DB::table('advisers')->latest()->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveAdviser() {
        try {
            $form = request()->data;
            extract($form);

            // check if student already exists
            if(DB::table('advisers')->where('firstname',$firstname)
                ->where('middlename',$middlename)
                ->where('lastname',$lastname)
                ->exists()
            ) {
                return response()->json('Adviser already exists', 303);
            }

            DB::table('advisers')->insert([
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

    public function deleteAdviser() {
        try {
            $id = request()->id;
            DB::table('advisers')->where('id',$id)->delete();
            return response()->json('Adviser Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


}