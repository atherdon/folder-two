'use strict';


var Video    = require('../models/video');

exports.getHomepage = function(req, res, next){

	res.render('index', { title: 'Express' });

};

exports.postVideo = function(req, res, next){

	// console.log(util.inspect( req.body, false, null ));

	//@todo remove startB & endB from form elements

	var url   = req.body.url;
	
	var start = req.body.start;
	var end   = req.body.end;
	var title = req.body.title;
	var desc  = req.body.desc;
	var step  = req.body.step; 
	

    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match  = url.match(regExp);
    var slug   = (match&&match[7].length==11)? match[7] : false;

	var value = new Video({
	     title : title,
	     url   : url,
	     desc  : desc,
	     start : start,
	     end   : end,
	     step  : step,
	     slug  : slug,
	});

	// console.log( value );	
	//@TODO change to bluebird version with async
// http://stackoverflow.com/questions/25555139/bluebird-promisies-crud-example-using-nodejs-express-and-mongoose
	value.save().then(function(docs){

		// console.log( docs );
		// console.log( docs._id );

		docs.linka = '/edit/' + docs._id + ''; //@todo change this later and move to layout template
		// docs.linka = '/edit/?gid=' + docs._id + '';

		// res.render('player', docs);


		res.render('player3', docs);

	});



};

exports.getExample = function(req, res, next){

	var object = {
		title    : false,
		subtitle : false,
		link     : false,
		body     : false,
	}

	res.render('example1', object);

};

exports.databaseConnect = function(req, res, next){

	var firstRow  = new Video({
		 _id:  "thetest",
	     title : "Title1",
	     url   : "http://www.google.com",
	     desc  : "desc",
	     start : 60,
	     end   : 180,
	     step  : 1,
	     slug  : "google"
	  });

	  // var secondRow = new Video({
	  //    title : "Title2",
	  //    url   : "www.gmail.com",
	  //    desc  : "description very long variable",
	  //    start : 10,
	  //    end   : 280,
	  //    step  : 60,
	  //    slug  : "gmail",
	  // });

	  // var thirdRow  = new Video({
	  //    title : "Title3",
	  //    url   : "www.drive.com",
	  //    desc  : "description",
	  //    start : 60,
	  //    end   : 370,
	  //    step  : 300,
	  //    slug  : "gdrive",
	  // });
//@TODO change to bluebird version with async
	firstRow.save().then(function(docs){

		console.log(docs);
		console.log('Video created!');

	});


	// secondRow.save();
	// thirdRow.save();


	// //get all the Videos

	// Video.find({}, function(err, videos) {

	//   if (err) {
	//   	throw err;
	  	
	//   }

	//   // object of all the videos
	//   console.log( videos );
	// });



	res.render('index', { title: 'CutStream | Start & End point for your video' });


};
