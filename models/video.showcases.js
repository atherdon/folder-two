'use strict';


function 

//@todo create other sample using same video functionality

//@todo convert youtube link with ?t=41s ?t=1m40s ?t=1h20m30s to start field
function saveExamplesToDatabase() {




	// video frames 
	var cg1 = new Video({
		_id   : 'G1aSAQ1CibQ',
		title : 'Logan Epic Kill',
		url   : 'https://youtu.be/G1aSAQ1CibQ?t=1m26s',
		desc  : 'LOGAN Official International Red Band Trailer #1 (2017) Hugh Jackman Wolverine Marvel Movie HD',
		start : 86,
		end   : 89,
		step  : 1,
		slug  : 'G1aSAQ1CibQ',
	});

	var cg2 = new Video({
		_id   : 'Lt-U_t2pUHI',
		title : 'Benedict Cumberbatch Shows Off Doctor Strange\'s Hands',
		url   : 'https://youtu.be/Lt-U_t2pUHI?t=41s',
		desc  : 'Witness the power of the Sorcerer Supreme',
		start : 41,
		end   : 51,
		step  : 1,
		slug  : 'Lt-U_t2pUHI',
	});

	var cg3 = new Video({
		_id   : 'Q88JeXtKMDY',
		title : 'Black Panther Featurette',
		url   : 'https://youtu.be/Q88JeXtKMDY?t=44s',
		desc  : 'Black Panther\'s role in a featurette for Marvel\'s "Captain America: Civil War"',
		start : 44,
		end   : 54,
		step  : 1,
		slug  : 'Q88JeXtKMDY',
	});

	var cg4 = new Video({
		_id   : 'nWHUjuJ8zxE',
		title : 'Jessica Jones Mirror Cracking',
		url   : 'https://youtu.be/nWHUjuJ8zxE?t=1m31s',
		desc  : 'She is a complex character, with problems',
		start : 91,
		end   : 97,
		step  : 1,
		slug  : 'nWHUjuJ8zxE',
	});


	// showcase frames
	var a1 = new Video({
		_id   : 'case1e1',
		title : 'Laura Haddock from Captain America?',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 47,
		end   : 55,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a2 = new Video({
		_id   : 'case1e2',
		title : 'Dog Dr.Wesley von Spears',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 55,
		end   : 61,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a3 = new Video({
		_id   : 'case1e3',
		title : 'The Kymellians',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 62,
		end   : 70,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a4 = new Video({
		_id   : 'case1e4',
		title : 'The Sakaraans',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 71,
		end   : 78,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a5 = new Video({
		_id   : 'case1e5',
		title : 'Bereet the Krylorian',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 79,
		end   : 86,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a6 = new Video({
		_id   : 'case1e6',
		title : 'Ship Called "Milano" - Alisa Milano is superstar!',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 87,
		end   : 93,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	
	var a7 = new Video({
		_id   : 'case1e7',
		title : 'Yondu',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 93,
		end   : 104,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});

	var a8 = new Video({
		_id   : 'case1e8',
		title : 'Stan Lee Cameo',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 104,
		end   : 112,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});



	var a800 = new Video({
		_id   : 'case1e9',
		title : 'Rhommann DEY & Garthan SAAL',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 112,
		end   : 121,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a801 = new Video({
		_id   : 'case1e10',
		title : 'Indiana Jones & the Maltese Falcon',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 121,
		end   : 132,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a802 = new Video({
		_id   : 'case1e11',
		title : 'Troma\'s LLOYD Kaufman',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 133,
		end   : 140,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a803 = new Video({
		_id   : 'case1e12',
		title : 'Castle? Right! Sorry, Nathan Fillon',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 140,
		end   : 146,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a804 = new Video({
		_id   : 'case1e13',
		title : 'Thanos on his throne',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 147,
		end   : 152,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a805 = new Video({
		_id   : 'case1e14',
		title : 'A home in "KNOWHERE"',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 153,
		end   : 163,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a806 = new Video({
		_id   : 'case1e15',
		title : 'Carina Walters',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 163,
		end   : 170,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a807 = new Video({
		_id   : 'case1e16',
		title : 'Cosmo THE SPACE DOG',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 171,
		end   : 176,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a808 = new Video({
		_id   : 'case1e17',
		title : 'Slugs from "SLITHER"',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 177,
		end   : 182,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a809 = new Video({
		_id   : 'case1e18',
		title : 'Chitauri warrior & Dark ELF',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 183,
		end   : 185,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a810 = new Video({
		_id   : 'case1e19',
		title : 'Cocoon of Adam warlock???',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 186,
		end   : 192,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a811 = new Video({
		_id   : 'case1e20',
		title : 'Voice of Rob Zombie',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 193,
		end   : 200,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a812 = new Video({
		_id   : 'case1e21',
		title : '12% of a plan',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 201,
		end   : 208,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a813 = new Video({
		_id   : 'case1e22',
		title : 'Captain Marvel costume',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 209,
		end   : 216,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a814 = new Video({
		_id   : 'case1e23',
		title : 'Howard The Duck',
		url   : 'https://www.youtube.com/watch?v=WbIPHjHoYaA',
		desc  : '',
		start : 216,
		end   : 226,
		step  : 1,
		slug  : 'WbIPHjHoYaA',
	});
	var a815 = new Video({
		_id   : 'case1e24',
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
		_id   : 'case2e1',
		title : 'Jamie sneezed and got lucky',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 190,
		end   : 241,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a10 = new Video({
		_id   : 'case2e2',
		title : 'Jamie loses big pot',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 276,
		end   : 300,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a11 = new Video({
		_id   : 'case2e3',
		title : 'AA - QQ - AK -Jamie goes really mad',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 492,
		end   : 586,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a12 = new Video({
		_id   : 'case2e4',
		title : 'Previous hand Break Down',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 591,
		end   : 642,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a13 = new Video({
		_id   : 'case2e5',
		title : '1/17 chanses to win - Call on the River',
		url   : 'https://www.youtube.com/watch?v=g0uPUJbOYdg',
		desc  : '',
		start : 649,
		end   : 695,
		step  : 1,
		slug  : 'g0uPUJbOYdg',
	});

	var a14 = new Video({
		_id   : 'case2e6',
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
		_id   : 'case3e1',
		title : 'First Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 9,
		end   : 15,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});

	var a16 = new Video({
		_id   : 'case3e2',
		title : 'Second Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 15,
		end   : 21,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});

	var a17 = new Video({
		_id   : 'case3e3',
		title : 'Third Funny Video from Compilation',
		url   : 'https://www.youtube.com/watch?v=_xYXxYh6J24',
		desc  : '',
		start : 21,
		end   : 27,
		step  : 1,
		slug  : '_xYXxYh6J24',
	});


	//save on db
    cg1.save(); 

	cg2.save();  

	cg3.save();  

	cg4.save();  

	// showcase frames
	  a1.save();  

	  a2.save();  

	  a3.save();  
	
	  a4.save();  
	
	  a5.save();  
	
	  a6.save();  
	
	  a7.save(); 

	  a8.save();  


	  a800.save();  
	  a801.save();  
	  a802.save();  
	  a803.save();  
	  a804.save();  
	  a805.save();  
	  a806.save();  
	  a807.save();  
	  a808.save();  
	  a809.save();  
	  a810.save();  
	  a811.save();  
	  a812.save();  
	  a813.save();  
	  a814.save();  
	  a815.save(); 
	//------------
	  a9.save();  

	  a10.save();  

	  a11.save();  

	  a12.save();  

	  a13.save();  

	  a14.save();  
	//-------
	  a15.save();  

	  a16.save();  

	  a17.save();  



};



