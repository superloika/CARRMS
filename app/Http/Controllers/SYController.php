<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SYController extends Controller
{
    public function getSYs() {
        try {
            $res = DB::table('schoolyears')->latest()->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveSY() {
        try {
            $form = request()->data;
            extract($form);

            // check if student already exists
            if(DB::table('schoolyears')->where('sy',$sy)
                ->exists()
            ) {
                return response()->json('School year already exists', 303);
            }

            DB::table('schoolyears')->where('status',1)->update(['status'=>0]);
            DB::table('schoolyears')->insert([
                'sy'=>$sy,
            ]);
            DB::table('students')->update(['is_enrolled'=>0]);

            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteSY() {
        try {
            $id = request()->id;
            DB::table('schoolyears')->where('id',$id)->delete();
            return response()->json('School year deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function toggleSY() {
        try {
            $id = request()->id;
            $status = request()->status;
            if($status==1) {
                DB::table('schoolyears')->where('status',1)->update(['status'=>0]);
                DB::table('schoolyears')->where('id',$id)->update(['status'=>1]);
            } else if ($status==0) {
                DB::table('schoolyears')->where('id',$id)->update(['status'=>0]);
            }
            return response()->json('School year deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function activeSY() {
        try {
            $res = DB::table('schoolyears')->where('status',1)->latest()->first();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function prevSY() {
        try {
            $res = DB::table('schoolyears')->where('status',0)->latest()->first();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }


}
