var app = (function(){

	var client = require("./keys.js"),
	song = require("") 


	var tweet = function (){
		var params ={
			screen name: @andrew_aschn3,
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
		var params = {
			type: "movie",
			title: "title",
			year: "year",
			rating:"imdbRating",
			countryProduced: "country",
			language: "language",
			plot: "plot",
			rottenTomatoes: "Rotten Tomatoes",
			query: process.argv[2]
	}

	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

	if(!params.query) { params.query = "Mr. Nobody"}

	movie.search(params, function (error, data){	

		for (var i = 0; i = data.movie.items.length; i++){

				var need = data.movie.items[i]
				console.log("Title: " + need.title.name);
				console.log("Year: " + need.year);
				console.log("Country: " + need.country);
				console.log("Language: " + need.language);
				console.log("Plot: " + need.plot);
				console.log("Rotten Tomatoes: " + need.Rotten Tomatoes);
}
 	}

	return{
		tweet: tweet
		spotify: spotify
		movie: movie
	}
}






app.tweet();


var fs = require("fs");
var read = fs.readFileSync('./random.txt', 'utf8');
console.log(read);



