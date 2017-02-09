var express  = require('express');
var router   = express.Router();

//models
var Video    = require('../models/video');



const util   = require('util');


var http = require('http');


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

	firstRow.save(function(err){
		if (err) throw err;

  		console.log('Video created!');
	});
	secondRow.save();
	thirdRow.save();


	// //get all the Videos

	Video.find(function(err, videos) {
	  if (err) {
	  	throw err;
	  	console.log('parasha!');
	  }

	  // object of all the videos
	  console.log( videos );
	});



	res.render('index', { title: 'CutStream | Start & End point for your video' });

});

/* GET home page. */
router.get('/', function(req, res, next) {
  
	res.render('index', { title: 'CutStream | Start & End point for your video' });

});


//@todo remove this later. unnecessary method. depricated.
router.get('/player', function(req, res){

	// console.log(util.inspect( req.query, false, null ));	

	// var db = req.db;
	// var collection = db.get('youtube');
	// var slug  = req.query.tagid;
	// // var obj_id = new ObjectID(req.query.tagid);

	// // console.log(util.inspect( obj_id, false, null ));
	
	// collection.findOne({ _id:slug }, function(e, docs){

	// 	// console.log(util.inspect( docs, false, null ));
	// 	// console.log(docs);

	// 	res.render('player', {
	// 		'title' : docs.title,
	// 		'url'   : docs.url,
	// 		'desc'  : docs.desc,
	// 		'start' : docs.start,
	// 		'end'   : docs.end,
	// 		'type_'  : docs.type,
	// 	    'slug'  : docs.slug,
	// 	});

	// });

});



router.get('/edit/:id/', function(req, res) {
		
	// console.log(util.inspect( req.params, false, null ));	

 	Video.findById( req.params.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });
				// res.send(err);

			console.log(video)	;

			// video.duration = req.params.duration;

			res.render('edit', video ); //@todo change to sending maybe two objects, or calculate duration by youtube on page instead

	

			

	});





router.get('/example', function(req, res){

});


router.get('/view/:id', function(req, res){

	Video.findById( req.params.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });
				// res.send(err);

			res.render('player-only', video );

	});



});

router.post('/update/', function(req, res){

	//@todo receive only update form values
	// console.log(util.inspect( req.params, false, null ));	
	console.log(util.inspect( req.body, false, null ));
	console.log( req.body.id );

 	Video.findById( req.body.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });


		console.log( req.body.start );
		console.log( req.body.end );
		// console.log(video)	;

		video.start = req.body.start;
		video.end   = req.body.end;

		video.save(function (err) {
			if (err) throw err;

			// console.log( 'updated' );
		});

		//@todo add thank you for using our service
		// res.redirect("index"); //@todo test title
		// res.render('index', { title: 'CutStream | Start & End point for your video' });

	});


});


router.post('/insert', function(req, res){

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

	value.save().then(function(docs){

		// console.log( docs );
		// console.log( docs._id );

		docs.linka = '/edit/' + docs._id + ''; //@todo change this later and move to layout template
		// docs.linka = '/edit/?gid=' + docs._id + '';

		// res.render('player', docs);


		res.render('player3', docs);

	});


});




// this controller relates to show cases pages.
// @todo readme later to more simple and appropriate
router.get('/example', function(req, res){

	var object = {
		title    : false,
		subtitle : false,
		link     : false,
		body     : false,
	}

	res.render('example1', object);
})


module.exports = router;


// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}