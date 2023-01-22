<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotifsController extends Controller
{
    public function getNotifs(){
        try {
            $sy_id=DB::table('schoolyears')->where('status',1)->pluck('id')->first();
            $status=request()->status;

            $res=DB::table('notifications')
                ->where('sy_id',$sy_id)
                ->where('status', $status)
                ->orderBy('id','DESC')
                ->get();
            return response()->json($res,200);
        } catch (\Throwable $th) {
            return response()->json()($th->getMessage(),500);
        }
    }


    public function markRead(){
        try {
            $id = request()->id;

            DB::table('notifications')->where('id',$id)->update(['status'=>1]);
            return response()->json('Done',200);
        } catch (\Throwable $th) {
            return response()->json()($th->getMessage(),500);
        }
    }
}
