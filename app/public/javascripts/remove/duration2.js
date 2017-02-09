var PlayerReptiloid = '';
$(document).ready(function(){

	var options = populateWithOptions();
	// console.log()

	var yt_int, yt_players = {}, PlayerReptiloid,
	    initYT = function() {

	    	console.log('pidarastia');
	    	 // yt_player = new YT.Player(".hiddenPlayer");
	    	 // slug = $("#slug").val();

// PlayerReptiloid = new YT.Player('hiddenPlayer', {
// 	  height: '390',
// 	  width: '640',

// 	  videoId: slug,
// 	  playerVars: {rel: 0},
// 	   events: {
//       'onReady': function (event) {
//     	event.target.playVideo();  	
//       	// body...
//       }
//   }
// 	  // events: {
// 	  //   'onReady': function(event){
	    	
	    	
	    	
// 			// // YouTubeloadvideo(player, 60, 67);

// 	  //   	// player.play();



// 	  //       // console.log( player.getDuration() );
	        
// 	  //   },
// 	  //    'onStateChange': onPlayerStateChange,
// 	  //    'onApiChange': function (event){

// 	  //    }
// 	  // }
// 	});
	

PlayerReptiloid = new YT.Player('hiddenPlayer', options);
	    	 console.log( PlayerReptiloid );

			// yt_player = new YT.Player(".hiddenPlayer", options);	    	 
			// console.log( yt_players );
	    	// $(".hiddenPlayer").each(function() {
	           
	     //    });

	        
	    };

	$.getScript("//www.youtube.com/player_api", function() {
	    yt_int = setInterval(function(){
	        if(typeof YT === "object"){
	            initYT();
	            clearInterval(yt_int);
	        }
	    },500);
	});



	$('#pidorlive').on('click', function(){


		// console.log( PlayerReptiloid );
		PlayerReptiloid.playVideo(); 

		var slug = $("#slug").val();

		PlayerReptiloid.loadVideoById({
              videoId: slug,
              startSeconds: 160,
              endSeconds: 167
            });		

		return false;

	});


});




// function onYouTubeIframeAPIReady() {
// 	console.log('ebat suka');

// 	// slug = $("#slug").val();

// 	// player = new YT.Player('hiddenPlayer', {});

// 	 // console.log( zz );

// 	// PlayerReptiloid = new YT.Player('hiddenPlayer', {
// 	//   height: '390',
// 	//   width: '640',

// 	//   videoId: slug,
// 	//   playerVars: {rel: 0},
// 	//   // events: {
// 	//   //   'onReady': function(event){
	    	
	    	
	    	
// 	// 		// // YouTubeloadvideo(player, 60, 67);

// 	//   //   	// player.play();



// 	//   //       // console.log( player.getDuration() );
	        
// 	//   //   },
// 	//   //    'onStateChange': onPlayerStateChange,
// 	//   //    'onApiChange': function (event){

// 	//   //    }
// 	//   // }
// 	// });

// 	// console.log(PlayerReptiloid);

// }

function populateWithOptions(){

	var slug = $("#slug").val();
	// console.log(slug);

	var options = {

		height: '390',
		width: '640',

		videoId: slug,
		playerVars: {
			rel: 0,
			'enablejsapi': 1
		}, //remove relative videos after stop function and add ability to kick ass

		events: {

		}
		// 'onReady': onReadyEvent,
		// 'onStateChange': onPlayerStateChange,
	 //    'onApiChange': onApiChangeEvent,


	};

	console.log(options);

	return options;
}

function onReadyEvent(event){

	// YouTubeloadvideo(player, 60, 67);
	callVideoReload(event)

	    	// player.play();



	        // console.log( player.getDuration() );

}

function onApiChangeEvent (event){


	if (event.data === YT.PlayerState.ENDED) {


		//load same video and set start & end points



		// var start  = $('');
		// var end    = $('');
		// var player = event.target;
		// YouTubeloadvideo(player, start, end);
		// callVideoReload(event)

          // console.log(index);
        //   if (index < videos.length - 1) {

        	// run same video from start 

            // event.target.loadVideoById({
            //   videoId: videos[index].vid,
            //   startSeconds: videos[index].startSeconds,
            //   endSeconds: videos[index].endSeconds
            // });
        //     index++;
        // }

    }


    // when user pause video via controls
    // when we call pause via js

    if (event.data === YT.PlayerState.PAUSED) {

    	console.log('pause');
    	console.log($('').val());

    	var flag = $('').val();
    	if( flag ){
    		console.log('paused outside');

    	// var start  = $('');
		// var end    = $('');
		// var player = event.target;
		// YouTubeloadvideo(player, start, end);
		// callVideoReload(event)

    	} else {
    		console.log('paused by controls');
    	}




    }

}

function onPlayerStateChange (event){


	if (event.data === YT.PlayerState.ENDED) {


		//load same video and set start & end points



		// var start  = $('');
		// var end    = $('');
		// var player = event.target;
		// YouTubeloadvideo(player, start, end);
		// callVideoReload(event)

          // console.log(index);
        //   if (index < videos.length - 1) {

        	// run same video from start 

            // event.target.loadVideoById({
            //   videoId: videos[index].vid,
            //   startSeconds: videos[index].startSeconds,
            //   endSeconds: videos[index].endSeconds
            // });
        //     index++;
        // }

    }


    // when user pause video via controls
    // when we call pause via js

    if (event.data === YT.PlayerState.PAUSED) {

    	console.log('pause');
    	console.log($('').val());

    	var flag = $('').val();
    	if( flag ){
    		console.log('paused outside');

    	// var start  = $('');
		// var end    = $('');
		// var player = event.target;
		// YouTubeloadvideo(player, start, end);
		// callVideoReload(event)

    	} else {
    		console.log('paused by controls');
    	}




    }

}



function YouTubeloadvideo(player, start, end) { 

	console.log(player);
	console.log(start);
	console.log(end);

	player.loadVideoById({

		videoId         : slug,
        startSeconds    : 60,
        endSeconds      : 67,
        suggestedQuality: 'medium'
    });
    console.log('badaboom');

}

function callVideoReload(event){

	// var start  = $('');
	// var end    = $('');
	// var player = event.target;
	// YouTubeloadvideo(player, start, end);

}