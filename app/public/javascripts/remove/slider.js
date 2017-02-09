

$(document).ready(function(){


  //@todo loadVideoById() не работают на мобильных устройствах.
  
  // console.log(PlayerReptiloid);


  // console.log(player);
  // YouTubeloadvideo(player, 60, 67); //wouldn't work
  // we need to fire changing state at YT player


  var playerInstance = playerInit();


  playerInstance.ready( function(){

    if( !$('.sliders_step1').length ){ return false; }

    var data = $('.sliders_step1').data();
    // console.log(data);

    // var player = this;
    //       console.log('ddddddddddd');
   // console.log( EndTime );


   // console.log( playerInstance.duration() )
    var player = this;
    player.pause();

    startTimeInSeconds = data.start;
    endTimeInSeconds   = data.end;
    // milliseconds       = data.total * 1000;

    player.currentTime( startTimeInSeconds ); // 1 minute into the video

    
    //        player.pause();
    
   
    player.on('play', function(e){

       var interval = player.setInterval(function(){

       preventToPlayMore(this, interval);

         
   },
    5000
    
   //  // milliseconds
   );    

      // preventToPlayMore( this, false );
    });
      // player.on('play', );
    
    player.on('pause', function(e){
      console.log('vasya');
    }); 

     
      
     

  } );

// if(0){
  sliderInitialization( playerInstance );
  // console.log(values);
  
  //case user have url with start point.
  //case user submit form with start and end time
  //case user submit only start or end time
  //case user don't submit start and end time





});


function sliderInitialization( player ){

  // console.log( $('.sliders_step1').length  );
  if( !$('.sliders_step1').length ){ return false; }
  //   

  //@todo try to calculate step using duration for reducing elements
  var data = $('.sliders_step1').data();
  console.log(data);

  // console.log(data.start);
  // console.log(data.end);
  // console.log(data.step);
  // console.log(data.min);
  // console.log(data.max);

  var min    = data.min;
  var max    = data.max;

  var step   = data.step;

  var start  = data.start;
  var end    = data.end;
  
  var values = [start, end];
  // var total  = false;

  $("#slider-range").slider({
  
      range : true,
      min   : min,
      max   : max,
      step  : step,
      values: values,

      slide: function (e, ui) {
        

        // PlayerReptiloid.pauseVideo();

        var first_elem_html = calculationDisplanation( ui.values[0], step );
        $('.slider-time').html( first_elem_html );

        $('#inputStart').val( ui.values[0] );

        // console.log( $('#inputTime1').val() );
        $('.total').html( calculationDisplanation( max, step ) );        

        // $('#inputTime1').val( '14: 14' );

        var total = durationCalculation( ui.values );
        // console.log(total);

        $('.sliders_step1').data("total", total);
        // console.log( $('.sliders_step1').data() );

        $('#inputEnd').val( ui.values[1] );
        var second_elem_html = calculationDisplanation( ui.values[1], step );
        $('.slider-time2').html( second_elem_html );


        changeSomethingAtPlayer( player, ui.values );

        // $('#inputTime2').val( '' );
        // console.log( $('#inputTime2').val() );

      }
  });

  // return {
  //   start  : data.start,
  //   end    : data.end,
  //   // total  : total,
  // } 

}

function calculationDisplanation( value, steps ){
  
  // console.log( value + ' seconds ' );

  if( steps == 1 ){

    var minutesA = Math.floor( value / 60);
    var secondsA = value - (minutesA * 60);
    var html = '';      
       // console.log( minutesA );
       // console.log( secondsA );

   if( minutesA ){
        html += minutesA + ":" ; 
   } else {
        html += '00:';
   }

   if( secondsA ){
       secondsA = addZeroBeforeTime(secondsA);
       // if( secondsA < 10 ){ secondsA = "0" + secondsA; }
        html += secondsA;
   } else {
        html += '00';
   }

    
       // console.log( html );
       return html;

    // return {
    //   'html'   : html,
    //   'seconds': value
    // }   



  }
  
  if( steps == 60 ){
    
    var minutesA = Math.floor( value / 60);
    var secondsA = value - (minutesA * 60);
    var html = '';      

   // console.log( minutesA );
   // console.log( secondsA );

   if( minutesA ){
    minutesA = addZeroBeforeTime(minutesA);
     // if( minutesA < 10 ){ minutesA = "0" + minutesA; }
        html += minutesA + ":" ; 
   } else {
        html += '00:';
   }

   if( secondsA ){
    // secondsA = addZeroBeforeTime(secondsA);
       
        html += secondsA;
   } else {
        html += '00';
   }
     // console.log( html );
    return html;  

  }
  
  if( steps == 300 ){
    
       var hoursA   = Math.floor( value / 3600);
       var minutesA = (value/60) - (hoursA * 60);
       var html = '';  

       if( hoursA ){
            html += hoursA + ":";
       }        

       if( minutesA ){
            minutesA = addZeroBeforeTime(minutesA);

            html += minutesA + ":00" ; 
       } else {
            html += '00:00';
       }

       // if( secondsA ){
       //      html += secondsA;
       // } else {
       //      html += '00';
       // }

       // console.log( html );
       return html;

  }
  
  return html;
  
}

function durationCalculation( values ){

    var totalSeconds = values[1] - values[0];

    // console.log(totalSeconds);

    var durationMinutes = Math.floor(totalSeconds / 60);

    // console.log(durationMinutes);    
    durationSeconds = totalSeconds - (durationMinutes * 60);
    durationSeconds = addZeroBeforeTime(durationSeconds);
    // if( durationSeconds < 10) {
        // durationSeconds = '0' + durationSeconds;
    // }
      // console.log(durationSeconds);    
    
    $('.duration').html( durationMinutes + ':' + durationSeconds +  ' sec' );

    return totalSeconds;

}

function addZeroBeforeTime( value ){
    if( value < 10) {
        value = '0' + value;
    }
    return value;
}

function playerInit(){
    var playerInstance = videojs('vid1',{
        "autoplay": false,
        
   });

     // playerInstance.addEvent('timeupdate', function () {
     //    if (playerInstance.currentTime() >= 60) {
     //      playerInstance.pause();
     //    }
     //  })


    return playerInstance;
}


function preventToPlayMore( player, interval = false ){

  var whereYouAt = player.currentTime();
  var flag = (whereYouAt > endTimeInSeconds) ? true : false;
  console.log( whereYouAt );
  console.log( flag );

   if(flag){
     player.pause();

     // player.currentTime( startTimeInSeconds );


     if( interval ){

        clearInterval(interval); 

     }

     
   }

}

// function playerFunction( player ){


    
// }

function changeSomethingAtPlayer( player, values ){
  
    console.log( values );

    player.pause();

    startTimeInSeconds = values[0];
    // endTimeInSeconds   = data.end;
    

    player.currentTime( startTimeInSeconds ); // 1 minute into the video

    
    //        player.pause();
    
   
    player.on('play', function(e){
      preventToPlayMore( this, false );
    });
      // player.on('play', );
     

     
      
    var interval = player.setInterval(function(){

       preventToPlayMore(player, interval);

         
   },
    5000
   //  // milliseconds
   );      

    
}