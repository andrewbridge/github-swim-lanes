<?php

$clientDeets = json_decode(file_get_contents('../clientDeets.json') , true);
 
$ch = curl_init();                    // initiate curl
$url = "https://github.com/login/oauth/access_token"; // where you want to post data
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, true);  // tell curl you want to post something
curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=".$clientDeets['clientId']."&client_secret=".$clientDeets['clientSecret']."&code=".$_REQUEST['code']); // define what you want to post
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return the output in string format
$output = curl_exec ($ch); // execute
 
curl_close ($ch); // close curl handle
 
$token = str_replace('&token_type=bearer', '', str_replace('access_token=', '', $output));
setcookie("GHSwimLaneToken", $token, time()+3600, "/github-swim-lanes/", "andrewbridge.github.io");
header( 'Location: '.$clientDeets['clientUrl'] ) ;