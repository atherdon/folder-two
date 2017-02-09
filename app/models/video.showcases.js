'use strict';


//@todo create other sample using same video functionality
function saveExamplesToDatabase() {

	var a1 = new Video({
		title : 'Laura Haddock from Captain America?',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 47,
		end   : 55,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a2 = new Video({
		title : 'Dog Dr.Wesley von Spears',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 55,
		end   : 61,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a3 = new Video({
		title : 'The Kymellians',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 62,
		end   : 70,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a4 = new Video({
		title : 'The Sakaraans',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 71,
		end   : 78,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a5 = new Video({
		title : 'Bereet the Krylorian',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 79,
		end   : 86,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a6 = new Video({
		title : 'Ship Called "Milano" - Alisa Milano is superstar!',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 87,
		end   : 93,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a7 = new Video({
		title : 'Yondu',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 93,
		end   : 104,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a8 = new Video({
		title : 'Stan Lee Cameo',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 104,
		end   : 112,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});



	var a800 = new Video({
		title : 'Rhommann DEY & Garthan SAAL',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 112,
		end   : 121,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a801 = new Video({
		title : 'Indiana Jones & the Maltese Falcon',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 121,
		end   : 132,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a802 = new Video({
		title : 'Troma\'s LLOYD Kaufman',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 133,
		end   : 140,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a803 = new Video({
		title : 'Castle? Right! Sorry, Nathan Fillon',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 140,
		end   : 146,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a804 = new Video({
		title : 'Thanos on his throne',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 147,
		end   : 152,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a805 = new Video({
		title : 'A home in "KNOWHERE"',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 153,
		end   : 163,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a806 = new Video({
		title : 'Carina Walters',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 163,
		end   : 170,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a807 = new Video({
		title : 'Cosmo THE SPACE DOG',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 171,
		end   : 176,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a808 = new Video({
		title : 'Slugs from "SLITHER"',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 177,
		end   : 182,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a809 = new Video({
		title : 'Chitauri warrior & Dark ELF',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 183,
		end   : 185,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a810 = new Video({
		title : 'Cocoon of Adam warlock???',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 186,
		end   : 192,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a811 = new Video({
		title : 'Voice of Rob Zombie',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 193,
		end   : 200,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a812 = new Video({
		title : '12% of a plan',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 201,
		end   : 208,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a813 = new Video({
		title : 'Captain Marvel costume',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 209,
		end   : 216,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a814 = new Video({
		title : 'Howard The Duck',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 216,
		end   : 226,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a815 = new Video({
		title : 'Undiscovered Easter Egg?',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 227,
		end   : 232,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});	
	//------------
	var a9 = new Video({
		title : 'Jamie sneezed and got lucky',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 190,
		end   : 241,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a10 = new Video({
		title : 'Jamie loses big pot',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 276,
		end   : 300,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a11 = new Video({
		title : 'AA - QQ - AK -Jamie goes really mad',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 492,
		end   : 586,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a12 = new Video({
		title : 'Previous hand Break Down',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 591,
		end   : 642,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a13 = new Video({
		title : '1/17 chanses to win - Call on the River',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 649,
		end   : 695,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a14 = new Video({
		title : 'Final table and famous Jamie face!',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 100,
		end   : 150,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});
	//-------
	var a15 = new Video({
		title : 'First Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 9,
		end   : 15,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});

	var a16 = new Video({
		title : 'Second Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 15,
		end   : 21,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});

	var a17 = new Video({
		title : 'Third Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 21,
		end   : 27,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});

};