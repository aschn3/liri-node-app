var app = (function(){

	var client = require("./keys.js"),
	song = require("") 


	var tweet = function (){
		var params ={
			screen name:  //type your twitter name,
			count: 20

		}
		client.key.get('statuses/user_timeline', params, function (error, tweets, response){
			console.log(error);
			console.log(tweets);

			for(var i= 0; i < tweets.length; i++){
				console.log((i + 1) + "_ " + tweets[i].text.replace('@_', ' '));
				console.log("____________________");
				console.log("____________________");

			}
		});
	}

	var spotify = function(){
		var params = {
			type: 'track',
			limit: 2,
			query: process.argv[3]


		}

		 if(!params.query) { params.query = "The Sign"}
		 	
		song.search(params, function (error, data){

			for (var i = 0; i = data.tracks.items.length; i++){

				var need = data.tracks.items[i]
				console.log("Album: " + need.album.name);
				console.log("Preview: " + need.previw_url);
				console.log("Artist name: " + need.album.artist[0].name);
				

				console.log("____________________");
				console.log("____________________");
			}

		});
	}

	var movie = function(){

	}



	return{
		tweet: tweet
		spotify: spotify
	}
})



app.tweet();