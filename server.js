// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');

// SERVER VARIABLES
var app = express();
var port = 8080;

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));	// Whatever is in the public folder, serve it
app.use(bodyParser.json());

// ENDPOINTS
app.get('/interest_rate', function(req, res){
	var bigNum = Math.random();
	var newNum = (bigNum * 20) + 1;
	var prettyNum = newNum.toFixed(2);

	// OR
	// var num = Math.floor(Math.random() * 2000) / 100;

	res.send(JSON.stringify({ 
		"Interest Rate" : prettyNum	// var num
	}))
})

// SERVER LISTENING
app.listen(port, function(){
	console.log("Listening on port ", port);
});