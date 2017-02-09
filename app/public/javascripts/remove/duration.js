var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// var player;
var slug;
function onYouTubeIframeAPIReady() { 

	slug = document.getElementById("slug").value;

	// player = new YT.Player('hiddenPlayer', {});

	 // console.log( zz );

	PlayerReptiloid = new YT.Player('hiddenPlayer', {
	  height: '390',
	  width: '640',

	  videoId: slug,
	  playerVars: {rel: 0},
	  events: {
	    'onReady': function(event){
	    	
	    	
	    	
			// YouTubeloadvideo(player, 60, 67);

	    	// player.play();



	        // console.log( player.getDuration() );
	        
	    },
	     'onStateChange': onPlayerStateChange,
	     'onApiChange': function (event){

	     }
	  }
	});



	// player = new YT.Player('hiddenPlayer', {
	//   height: '390',
	//   width: '640',

	//   videoId: slug,
	//   events: {
	//     'onReady': function(event){
	    	
	//         // console.log( player.getDuration() );
	//         // @todo change to jquery script
	//         //document.getElementById("duration").value = player.getDuration();
	//         //document.getElementById("durationz").value = player.getDuration();
	//         var href = document.getElementById("padaboom").href + '/' + player.getDuration();

	//         // console.log( href );
	// 		document.getElementById("padaboom").href = href;	        
	//         // document.getElementById("abc").href="xyz.php";
	//     },
	//     // 'onStateChange': onPlayerStateChange
	//   }
	// });
}
// End Youtube Iframe Init


function YouTubeloadvideo(player, start, end) { 


	   player.loadVideoById({

		videoId         : slug,
        startSeconds    : 60,
        endSeconds      : 67,
        suggestedQuality: 'medium'
    });

}


function onPlayerStateChange (event){
 if (event.data === YT.PlayerState.ENDED) {
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


    if (event.data === YT.PlayerState.PAUSED) {

    	console.log('pause');

    }

		
}