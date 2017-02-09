var express  = require('express');
var router   = express.Router();


const util   = require('util');

var http = require('http');

//models
var Video    = require('../models/video');


router.get('/mongotest', function(req, res, next) {
  
	var firstRow  = new Video({
	     title : "Title1",
	     url   : "http://www.google.com",
	     desc  : "desc",
	     start : 60,
	     end   : 180,
	     step  : 1,
	     slug  : "google"
	  });

	  var secondRow = new Video({
	     title : "Title2",
	     url   : "www.gmail.com",
	     desc  : "description very long variable",
	     start : 10,
	     end   : 280,
	     step  : 60,
	     slug  : "gmail",
	  });

	  var thirdRow  = new Video({
	     title : "Title3",
	     url   : "www.drive.com",
	     desc  : "description",
	     start : 60,
	     end   : 370,
	     step  : 300,
	     slug  : "gdrive",
	  });

	firstRow.save().then(function(docs){

		console.log(docs);
		console.log('Video created!');
		
	});


	secondRow.save();
	thirdRow.save();


	// //get all the Videos

	Video.find({}, function(err, videos) {

	  if (err) {
	  	throw err;
	  	
	  }

	  // object of all the videos
	  console.log( videos );
	});



	res.render('index', { title: 'CutStream | Start & End point for your video' });

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
