'use strict';


var Video    = require('../models/video');

exports.getVideo = function(req, res, next){

	Video.findById( req.params.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });
				// res.send(err);

			res.render('player-only', video );

	});

};

exports.getVideoById = function(req, res, next){

	// console.log(util.inspect( req.params, false, null ));	

 	Video.findById( req.params.id, function(err, video) {

		if (err) 
			res.render('empty', { title: 'Error' });
				// res.send(err);

			console.log(video)	;

			// video.duration = req.params.duration;

			res.render('edit', video ); //@todo change to sending maybe two objects, or calculate duration by youtube on page instead

	

			

	});

};

exports.update = function(req, res, next){

	//@todo receive only update form values
	// console.log(util.inspect( req.params, false, null ));	
	console.log(util.inspect( req.body, false, null ));
	console.log( req.body.id );

	const id = req.body.id;
	Video.findOneAndUpdate({_id:id}, {start: req.body.start, end:req.body.end}, {}, function(err, video){
		//@todo add thank you for using our service
		// res.redirect("index"); //@todo test title
		// res.render('index', { title: 'CutStream | Start & End point for your video' });
		if (err) 
			res.render('empty', { title: 'Error' });
		
	});


 

};

// exports.getVideo = function(req, res, next){

//   var form = {},
//   error = null,
//   formFlash = req.flash('form'),
//   errorFlash = req.flash('error');

//   if (formFlash.length) {
//     form.email = formFlash[0].email;
//   }
//   if (errorFlash.length) {
//     error = errorFlash[0];
//   }
//   res.render(req.render, {
//     form: form,
//     error: error,
//     plans: plans
//   });

// };