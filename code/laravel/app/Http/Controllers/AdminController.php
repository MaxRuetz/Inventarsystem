<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use DB;
use Hash;

use Crypt;
use App\Http\Requests;

class AdminController extends Controller
{
	 public function showAllAdmins()
     {
          
        return DB::table('user')
        ->join('member', 'user.member_id', '=', 'member.id')
        ->where('member_id', '!=', 'NULL')
        ->select('user.id as ID', 'user.FirstName as FirstName', 'user.LastName as LastName', 'user.Email as Email', 'member.isActivated as Activated')
        ->get();

    }

    public function showDetailAdmins($id)
     {
        $check = DB::table('user')->where('id', $id)->select('member_id')->pluck('member_id');

        if($check[0] == NULL){
           return 'No Admin';
        }else{ 
            return DB::table('user')
            ->join('member', 'user.member_id', '=', 'member.id')
            ->where('user.id', $id)
            ->select('user.id as ID', 'user.FirstName as FirstName', 'user.LastName as LastName', 'user.Email as Email', 'user.Street as Street', 'user.City as City', 'user.ZIP as ZIP', 'user.MobilePhone as Phone', 'user.Matrikel as Matrikel', 'member.isActivated as Activated', 'member.created_at as AdminCreated', 'member.updated_at as AdminLastUpdated ' )
            ->get();
        }
    }



   public function store(Request $request)
    {
        $R_firstname = $request->input('firstname');
        $R_lastname = $request->input('lastname');
        $R_street = $request->input('street');
        $R_city = $request->input('city');
        $R_zip = $request->input('zip');
        $R_mobile = $request->input('mobile');
        $R_email = $request->input('email');
        $R_matrikel = $request->input('matrikel');
        $R_password = $request->input('password');
        $R_token = $request->input('token');
        $current = Carbon::now(); 

        $checkmail = DB::table('user')->select('Email')->where('Email', $R_email)->pluck('Email');
        $checktoken = DB::table('user')->select('RegistrationToken')->where('Email', $R_email)->where('RegistrationToken', $R_token)->pluck('RegistrationToken');



        if($checkmail == NULL)
        {
            return 'Email not found';
            
        }
        else
        {
	        if($checktoken == NULL)
            {
                return 'Email found. But Token invalid';
           
            }
            else
            {
                 $message = DB::table('member')->insert(
                ['password' => Hash::make($R_password), 
                'isActivated' => 1,
                'isAdmin' => 1,
                ]);

            $member_Id = DB::table('member')->max('Id');

            $message = DB::table('user')->where('Email', $R_email)->update(
                [
                'member_id' => $member_Id,
                'FirstName' => $R_firstname, 
                'LastName' => $R_lastname,
                'Street' => $R_street,
                'City' => $R_city,
                'ZIP' => $R_zip,
                'MobilePhone' => $R_mobile,
                'Matrikel' => $R_matrikel,            
                'updated_at' => $current]);

            $message = DB::table('user')->where('RegistrationToken', $R_token)->update(['RegistrationToken' => NULL]);


            return 'User updated to Admin';

            }
    	}
    	return 'WHOOPS';
    }

    public function AdminDeactivate($id) 
    {  
        DB::table('user')
            ->join('member', 'user.member_id', '=', 'member.id')
            ->update(['member.isActivated' => 0]);


        return 'Success';
    }


    public function setPassword(Request $request, $id) 
    {  
        $R_oldpassword = $request->input('oldpassword');
        $R_newpassword = $request->input('newpassword');

        $checkpw = DB::table('user')->join('member', 'user.member_id', '=', 'member.id')->where('user.id', $id)->select('member.password')->get();

        //$R_oldpassword

        /*if('')
        {

        }
        */

        //return "Test";
    }

    public function invite(Request $request)
    {
        //get the email
        try
        {
            //get the request informations
            $r_email = $request->input('email');

            //email is empty or not sent
            if($r_email=="")
            {
                return "email is empty";
            }else
            {
                //return "here we are";
                $db_email = DB::table('user')->where('Email', '=', $r_email)->select('Email')->pluck('Email');
                
                $db_email_check = "";
                $db_email_check = $db_email[0];
                
                return $db_email_check;
                //if user allready exists
                if($db_email_check==$r_email)
                {
                    //update old
                    return "old one";
                }
                else
                {
                    //insert new one
                    return "new one";
                }
            }



        }catch(\Exception $e)
        {
            return "can't get the email";
        }

    }
    /*old not working
    public function invite(Request $request)
    {
        //Check for request
        try
        {
            //Set Var to NULL
            $db_email = "";
            //Read request
            $r_email = $request->input('email');
            //Check Database for existing email

            //Check for email in database
            try{
                
            //SQL select for users email address and set it in the db_email
            $db_email = DB::table('user')->where('user.Email', $r_email)->select('Email')->get();
                
            return $db_email;

            //Generate hash for email address
            //if email allready exisists
            if($db_email[0]!=""){
            $regToken = Crypt::encrypt($db_email);
            //if email not exists
            }else if($db_email==""){
            $regToken = Crypt::encrypt($r_email);
            }

            return $regToken;

            //if db_email is not allready set than
            if($db_email!=""){
            $SaveInDB = DB::table('user')->insert(
                [ 
                 'Email' => $db_email, 
                 'RegistrationToken' => $regToken, 
                 'created_at'=>  Carbon::now()]);

            //if the mail was allready given in table (not saved agained)
            }else if($db_email==""){
              $SaveInDB = DB::table('user')->insert(
                [ 
                 'Email' => $r_email, 
                 'RegistrationToken' => $regToken, 
                 'created_at'=>  Carbon::now()]);  
            }
            //Send email with token to the users email address


            return "email should be sent.";

            }catch(\Exception $e){
                //If the email is not allready given in the table
                return "Something with your Email or the DB went wrong";
            }

        }catch(\Exception $e){
            return "wrong request";
        }


        //return errors 
    }
    */
}
