<?php

$clientDeets = json_decode(file_get_contents('../clientDeets.json') , true);
 
$ch = curl_init();                    // initiate curl
$url = "https://github.com/login/oauth/access_token"; // where you want to post data
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, true);  // tell curl you want to post something
curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=".$clientDeets['clientId']."&client_secret=".$clientDeets['clientSecret']."&code=".$_REQUEST['code']); // define what you want to post
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']); // Accept json so the response is in json
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // return the output in string format
$output = curl_exec ($ch); // execute
 
curl_close ($ch); // close curl handle
 
$token = json_decode($output, true)['access_token'];
setcookie("GHSwimLaneToken", $token, time()+3600);
header( 'Location: '.$clientDeets['clientUrl'] ) ;