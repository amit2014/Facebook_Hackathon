userArray = {};
randomNums = new Array(26);
randomNumSeen = new Array(52);

	$("#fb_login").click(login);
    function login() {
    	FB.login(function(response) {
        	if (response.authResponse) {
            // connected
            getUsers();
            console.log("Got newsfeed!");
        	} else {
            // cancelled
            console.log("stuff dont even work");
      	  }
    	},{scope: 'read_stream'});
		}

function getUsers(){
	FB.api('/me/home?limit=100', function(response){
	for(var i = 0; i < response['data'].length; i++){
    var username = response['data'][i]['from']['name'];
    if (userArray[username])
      userArray[username][0] += 1;
    else
      userArray[username] = [1,0];
	 }
   });

  /* creating object of non-repeating random nums */
    var randomNumNote = 0;
    for( var i = 0; i < randomNumSeen.length; i++ ){
	   	randomNumNote = Math.floor(Math.random()*55);
      randomNumSeen.push(randomNumNote);
    }

    for ( var names in userArray ){
      userArray[name][0] = randomNumSeen ;
      console.log(name + " " + userArray[name][0]);
 		}

}

function getPosts(){
  /* fucken piece of shit mother fuckers of a dick head */
} 
$("#getUsersButton").click(getUsers);
