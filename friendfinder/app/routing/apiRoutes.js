

var friendsList = require("../data/friends")

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	  res.json(friendsList);
	});


	app.post("/api/friends", function(req, res) {

		var friendMatch = {
	  		name: "",
	  		photo: "",
	  		difference: 50
	  	}

		var newPerson = req.body;

		console.log(newPerson);

		var newScores = newPerson.scores;

		var totalDifference = 0;

		for (var i=0; i<friendsList.length-1; i++) {

	  		for(var j = 0; j < 10; j++){
	  			int = (parseInt(newScores[j])) - (parseInt(friendsList[i].scores[j]));
	  			totalDifference += Math.abs(int);
	  			console.log(totalDifference);
	  		}

			if (totalDifference <= friendMatch.difference) {
				friendMatch.name = friendsList[i].name;
				friendMatch.photo = friendsList[i].photo;
				friendMatch.difference = totalDifference;
			}

	  	}

	friendsList.push(newPerson);
	res.json(friendMatch);

	});

}