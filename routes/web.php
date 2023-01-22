<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('layouts.app');
// });

Auth::routes();

// HOME
Route::get('/', 'HomeController@index')->name('home');

// logout using get http method
Route::get('/logout', 'Auth\LogoutController@logout')->name('logout2');

// Flush current session
Route::get('/flush-session', 'Auth\LogoutController@flushSession')->name('flushSession');


// ACCOUNTS
// Route::prefix('accounts')->group(function() {
Route::group(['prefix' => 'accounts'], function() {
    Route::get('/', 'AccountsController@index');
    Route::post('/', 'AccountsController@store');
    Route::match(['put','patch'], '/update-profile', 'AccountsController@updateProfile');
    Route::match(['put','patch'], '/update-password', 'AccountsController@updatePassword');
    Route::match(['put','patch'], '/update-principal-assignment', 'AccountsController@updatePrincipalAssignment');
    Route::match(['delete'], '/delete', 'AccountsController@delete');
});

// admin
Route::group(['prefix'=>'admin'], function(){
    // Route::group(['prefix'=>'gradelevels'], function() {
    //     Route::get('getGradeLevels', 'GradeLevelController@getGradeLevels');
    // });
    Route::group(['prefix'=>'sy'], function() {
        Route::get('activeSY', 'SYController@activeSY');
        Route::get('prevSY', 'SYController@prevSY');
        Route::get('getSYs', 'SYController@getSYs');
        Route::post('saveSY', 'SYController@saveSY');
        Route::post('deleteSY', 'SYController@deleteSY');
        Route::post('toggleSY', 'SYController@toggleSY');
    });
    Route::group(['prefix'=>'students'], function() {
        Route::get('getStudents', 'StudentController@getStudents');
        Route::post('saveStudent', 'StudentController@saveStudent');
        Route::post('deleteStudent', 'StudentController@deleteStudent');
    });
    Route::group(['prefix'=>'advisers'], function() {
        Route::get('getAdvisers', 'AdviserController@getAdvisers');
        Route::post('saveAdviser', 'AdviserController@saveAdviser');
        Route::post('deleteAdviser', 'AdviserController@deleteAdviser');
    });
    Route::group(['prefix'=>'sections'], function() {
        Route::get('getSections', 'SectionController@getSections');
        Route::post('saveSection', 'SectionController@saveSection');
        Route::post('deleteSection', 'SectionController@deleteSection');
        Route::post('updateAdviser', 'SectionController@updateAdviser');
    });
    Route::group(['prefix'=>'subjects'], function() {
        Route::get('getSubjects', 'SubjectController@getSubjects');
        Route::post('saveSubject', 'SubjectController@saveSubject');
        Route::post('deleteSubject', 'SubjectController@deleteSubject');
    });
    Route::group(['prefix'=>'enrollment'], function() {
        Route::post('getStudentsForEnrollment', 'EnrollmentController@getStudentsForEnrollment');
        Route::post('saveStudentEnrollment', 'EnrollmentController@saveStudentEnrollment');
        Route::post('getStudentsEnrolled', 'EnrollmentController@getStudentsEnrolled');
        Route::post('deleteEnrollment', 'EnrollmentController@deleteEnrollment');
    });
    Route::group(['prefix'=>'strands'], function() {
        Route::get('getStrands', 'StrandController@getStrands');
        Route::post('saveStrand', 'StrandController@saveStrand');
        Route::post('deleteStrand', 'StrandController@deleteStrand');
    });
    Route::group(['prefix'=>'subtags'], function() {
        Route::get('getSubtags', 'SubTagController@getSubtags');
        Route::post('saveSubtag', 'SubTagController@saveSubtag');
        Route::post('deleteSubtag', 'SubTagController@deleteSubtag');
    });

    //notifs
    Route::group(['prefix'=>'notifs'], function() {
        Route::post('getNotifs', 'NotifsController@getNotifs');
        Route::post('markRead', 'NotifsController@markRead');
    });
});


// adviser
Route::group(['prefix'=>'adviser'], function(){
    Route::group(['prefix'=>'sections'], function() {
        Route::post('getSections', 'AdviserEnrollmentController@getSections');
        Route::post('getSectionDetails', 'AdviserEnrollmentController@getSectionDetails');
        Route::post('getStudents', 'AdviserEnrollmentController@getStudents');
        Route::post('getSubjects', 'AdviserEnrollmentController@getSubjects');
        Route::post('updateGrades', 'AdviserEnrollmentController@updateGrades');
    });
});


// reports
Route::group(['prefix'=>'reports'], function(){
    Route::post('studentEnrollment', 'ReportsController@studentEnrollment');
    Route::post('permaRecord', 'ReportsController@permaRecord');
    Route::post('generateCOE', 'ReportsController@generateCOE');
});


/**
 *
 */
Route::get('{any}', 'HomeController@index')->where('any', '.*');
