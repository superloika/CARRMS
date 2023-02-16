<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{
    public function getStudents() {
        try {
            $res = DB::table('students')
            ->select(
                'students.*',
                DB::raw("CONCAT(`firstname`,' ',`middlename`,' ',`lastname`,' - ',`lrn`) as searchKey")
            )
            ->latest()->get();
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function saveStudent() {
        try {
            $form = request()->data;
            extract($form);

            // check if student's LRN already exists
            if(
                trim($lrn) != ''
                && DB::table('students')->where('lrn',trim($lrn))->exists()
            ){
                return response()->json('LRN already exists', 303);
            }

            // check if student already exists
            if(DB::table('students')->where('firstname',$firstname)
                ->where('middlename',$middlename)
                ->where('lastname',$lastname)
                ->where('extname',$extname)
                ->exists()
            ) {
                return response()->json('Student already exists', 303);
            }

            DB::table('students')->insert([
                'lrn'=>$lrn ?? null,
                'firstname'=>$firstname,
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
            // return response()->json($th->getMessage(), 500);
            return response()->json('All fields are required', 500);
        }
    }

    public function updateStudent() {
        try {
            $form = request()->data;
            extract($form);

            // // check if student's LRN already exists
            // if(
            //     trim($lrn) != ''
            //     && DB::table('students')->where('lrn',trim($lrn))->exists()
            // ){
            //     return response()->json('LRN already exists', 303);
            // }

            // // check if student already exists
            // if(DB::table('students')->where('firstname',$firstname)
            //     ->where('middlename',$middlename)
            //     ->where('lastname',$lastname)
            //     ->where('extname',$extname)
            //     ->exists()
            // ) {
            //     return response()->json('Student already exists', 303);
            // }

            DB::table('students')
            ->where('id', $id)
            ->update([
                'lrn'=>$lrn ?? null,
                'firstname'=>$firstname,
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
            // return response()->json('All fields are required', 500);
        }
    }

    public function deleteStudent() {
        try {
            $id = request()->id;
            DB::table('students')->where('id',$id)->delete();
            return response()->json('Student Deleted', 200);
        } catch (\Throwable $th) {
            // return response()->json($th->getMessage(), 500);
            return response()->json($th->getMessage(), 500);
        }
    }

    public function import() {
        try {
            //code...
            $file = request()->file;
            $dateTimeToday = Carbon::now()->format('Y-m-d H:i:s');
            $fileName = $file->getClientOriginalName();
            $storagePath = "public/students/". substr($dateTimeToday, 0, 10);
            Storage::putFileAs($storagePath, $file, $fileName);

            if (Storage::exists("$storagePath/$fileName")) {
                $content = Storage::get("$storagePath/$fileName");
                $rows = explode(PHP_EOL, utf8_encode($content));

                for($i=0; $i<count($rows); $i++) {
                    if($i==0) continue;
                    $cols = preg_split('/\t/', $rows[$i]);
                    // dd($cols);
                    if(count($cols)==11) {
                        $lrn = trim($cols[0]);
                        $firstname = trim($cols[1]);
                        $middlename = trim($cols[2]);
                        $lastname = trim($cols[3]);
                        $extname = trim($cols[4]);
                        $gender = trim($cols[5]);
                        $dob = trim($cols[6]);
                        $pob = trim($cols[7]);
                        $address = trim($cols[8]);
                        $guardian = trim($cols[9]);
                        $guardian_address = trim($cols[10]);

                        // ***************** insert data ********************************
                        // check if student's LRN already exists
                        if(
                            $lrn != ''
                            && DB::table('students')->where('lrn',trim($lrn))->exists()
                        ){
                            continue;
                        }

                        // check if student already exists
                        if(DB::table('students')->where('firstname',$firstname)
                            ->where('middlename',$middlename)
                            ->where('lastname',$lastname)
                            ->where('extname',$extname)
                            ->exists()
                        ) {
                            continue;
                        }

                        DB::table('students')->insert([
                            'lrn'=>$lrn ?? null,
                            'firstname'=>$firstname,
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
                        // ***************** insert data ********************************
                    }

                }
                return response()->json('Done', 200);
            }

        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

}
