<?php //musicalFun.php
require_once("src/facebook.php");

$config = array();
$config['appId'] = '568937099796787';
$config['secret'] = '523a30d876d5a12e81ae6d939439d21d';
$config['fileUpload'] = false; // optional

$facebook = new Facebook($config);

$user_id = $facebook->getUser();

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Musical Fun</title>
    <script src="jquery-1.9.1.min.js"></script>
	</head>
	<body>
		<div id="fb-root"></div>
			<script>
		  // Additional JS functions here
  		window.fbAsyncInit = function() {
    		FB.init({
      		appId      : '568937099796787', // App ID
      		status     : true, // check login status
      		cookie     : true, // enable cookies to allow the server to access the session
      		xfbml      : true  // parse XFBML
    		});

    		// Additional init code here

				FB.getLoginStatus(function(response) {
 				 if (response.status === 'connected') {
    			console.log("Facebook connection works");
			  } else if (response.status === 'not_authorized') {
    		// not_authorized
        	console.log("Facebook connection doesnt work but not authorized; logging in");
				} else {
    		// not_logged_in
        	console.log("stuff's messed up");
  			}
 				});

  		};

  		// Load the SDK Asynchronously
  		(function(d){
     		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     		if (d.getElementById(id)) {return;}
     		js = d.createElement('script'); js.id = id; js.async = true;
     		js.src = "//connect.facebook.net/en_US/all.js";
     		ref.parentNode.insertBefore(js, ref);
   		}(document));
		</script>
		<h1>This is the user id <?php echo $user_id ?></h1>
		<input type="button" name="fb_login" id="fb_login" value="Login Here!" />
    <input type="button" name="getUsers" id="getUsersButton" value="Get Users" />
	</body>
  <script src="fb_functions.js"></script>
</html>
