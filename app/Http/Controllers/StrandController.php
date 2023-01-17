<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StrandController extends Controller
{
    public function getStrands() {
        try {
            $res = DB::table('strands')->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveStrand() {
        try {
            $data = request()->data;
            extract($data);

            if(
                DB::table('strands')->where('strand_name', $strand_name)->exists()
            ) {
                return response()->json('Strand already exists', 500);
            } else {
                DB::table('strands')->insert([
                    'strand_name'=>$strand_name,
                    'strand_description'=>$strand_description
                ]);
            }
            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteStrand() {
        try {
            $id = request()->id;
            DB::table('strands')->where('id',$id)->delete();
            return response()->json('Strand Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
}
