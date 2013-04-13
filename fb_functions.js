userArray = {};

	$("#fb_login").click(login);
    function login() {
    	FB.login(function(response) {
        	if (response.authResponse) {
            // connected
            testAPI();
        	} else {
            // cancelled
            console.log("stuff dont even work");
      	  }
    	},{scope: 'read_stream'});
		}
    function testAPI() {
 			FB.api('/me/home', function(response) {
  	      console.log( response );
    	});
		}

function getUsers(){
	FB.api('/me/home', function(response){
		for(var i = 0; i < response['data'].length; i++){
      var username = response['data'][i]['from']['name'];
      if (userArray[username])
        userArray[username][0] += 1;
      else
        userArray[username] = [1,0];
    }
    for ( var name in userArray ){
      console.log(name + " " + userArray[name][1]);
    }
	});
}

$("#getUsersButton").click(getUsers);
