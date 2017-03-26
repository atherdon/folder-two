var express  = require('express');
var router   = express.Router();


const util   = require('util');

// var http = require('http');

//models
var Video    = require('../models/video');


/* GET player functionality. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router.get('/:id', function(req, res){

	Video.findById( req.params.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });
				// res.send(err);

			res.render('player-only', video );

	});



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




module.exports = router;


// Fancy console.log
function output (err, data) {
  console.dir (err || data, {
    depth: null,
    colors: true
  });
}