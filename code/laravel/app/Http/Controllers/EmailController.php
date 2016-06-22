<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class EmailController extends Controller
{
    public function send(Request $request){
	    $title = $request->input('title');
        $content = $request->input('content');

        Mail::send('emails.welcome', ['title' => $title, 'content' => $content], function ($message)
        {

            $message->from(' 789d962ab3-169976@inbox.mailtrap.io', 'Christian Nwamba');

            $message->to(' 789d962ab3-169976@inbox.mailtrap.io');

        });

        return response()->json(['message' => 'Request completed']);      
	}
}
