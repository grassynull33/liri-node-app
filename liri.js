var keys = require("./keys.js");

var twitterCredentials = keys.twitterKeys;

var command = process.argv[2];

if(command === "my-tweets") {
	var Twitter = require('twitter');

	var client = new Twitter({
		consumer_key: twitterCredentials.consumer_key,
		consumer_secret: twitterCredentials.consumer_secret,
		access_token_key: twitterCredentials.access_token_key,
		access_token_secret: twitterCredentials.access_token_secret
	});

	var params = {
		screen_name: 'GiantGreenLion',
		count: 20
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {

	  	console.log("My 20 Most Recent Tweets");
	  	console.log("");

	  	for(var i = 0; i < tweets.length; i++) {
	  		console.log("( #" + (i + 1) + " )  " + tweets[i].text);
	  		console.log("Created:  " + tweets[i].created_at);
	  		console.log("");
	  	}
	  }
	});
} else if(command === "spotify-this-song") {

} else if(command === "movie-this") {

} else if(command === "do-what-it-says") {

}