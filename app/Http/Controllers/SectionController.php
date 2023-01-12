<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{
    public function getSections() {
        try {
            $res = DB::table('sections')
                ->select('sections.*','advisers.firstname','advisers.middlename','advisers.lastname')
                ->leftJoin('advisers','advisers.id','sections.adviser_id')
                ->orderBy('order')->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveSection() {
        try {
            $data = request()->data;
            extract($data);
            $order='';
            $level='';
            // $orderAndLevel = DB::table('sections')->where('grade', $grade)->first(['order','level']);
            // dd($orderAndLevel);
            foreach(['Preschool'] as $string) {
                if(strpos($grade, $string) !== false) {
                    $order=1;
                    $level="Preschool";
                    break;
                }
            }
            foreach(['Kinder 1','Kinder 2'] as $string) {
                if(strpos($grade, $string) !== false) {
                    $order=2;
                    $level="Kinder";
                    break;
                }
            }
            foreach(['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6'] as $string) {
                if(strpos($grade, $string) !== false) {
                    $order=3;
                    $level="Elementary";
                    break;
                }
            }
            foreach(['Grade 7','Grade 8','Grade 9','Grade 10'] as $string) {
                if(strpos($grade, $string) !== false) {
                    $order=4;
                    $level="Junior High";
                    break;
                }
            }
            foreach(['Grade 11','Grade 12'] as $string) {
                if(strpos($grade, $string) !== false) {
                    $order=5;
                    $level="Senior High";
                    break;
                }
            }

            if(
                DB::table('sections')->where('grade', $grade)->where('section', $section)->exists()
            ) {
                return response()->json('Section already exists', 500);
            } else {
                DB::table('sections')->insert([
                    'grade'=>$grade,
                    'section'=>$section,
                    'order'=>$order,
                    'level'=>$level
                ]);
            }
            return response()->json('Success', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function deleteSection() {
        try {
            $id = request()->id;
            DB::table('sections')->where('id',$id)->delete();
            return response()->json('Section Deleted', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function updateAdviser() {
        try {
            $section_id = request()->section_id;
            $adviser_id = request()->adviser_id;
            DB::table('sections')->where('id',$section_id)->update([
                'adviser_id'=>$adviser_id
            ]);
            return response()->json('Adviser updated', 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
}
