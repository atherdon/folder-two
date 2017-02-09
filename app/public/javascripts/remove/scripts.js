$(document).ready(function(){



    $('[data-plugin="formatter"]').each(function() {


        var options = {
             persistent: true,
             // pattern   : "{{4}}{{4}}: {{4}}{{4}}"
             pattern   : "{{99}}: {{99}}"
        }
//                    console.log( pattern );
        
//                    pattern = pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}')

//                    var options = $.extend({}, defaults, ieOptions, $(this).data());
//                    if (options.pattern) {
//                      options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
//                    }

        $(this).formatter(options);
        
        // $(this).
        //problem. you can input time more than you have in video @TODO
        // http://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up
        // http://stackoverflow.com/questions/14042193/how-to-trigger-an-event-in-input-text-after-i-stop-typing-writing
        // http://stackoverflow.com/questions/8008004/jquery-delay-event-until-the-user-has-finished-typing
    });



            // $('[data-plugin="asRange"]').each(function() {

            //         var options = {

            //              // tip: false,
            //              scale: false
            //         }

            //         $(this).asRange( options );
                    
            //     });

    $("#slider-range").slider({
    range: true,
    min: 0,
    max: 105,
  // max:4650,
    step: 1,
    values: [86, 105],
  // step:300,
  // step:60,
  // values:[3440, 4650],
    slide: function (e, ui) {
      

      var first_elem_html = calculationDisplanation( ui.values[0], $(this).slider("option", "step") );
      $('.slider-time').html( first_elem_html );

      // console.log( $('#inputTime1').val() );

      $('#inputTime1').val( '14: 14' );

      durationCalculation( ui.values );


      var second_elem_html = calculationDisplanation( ui.values[1], $(this).slider("option", "step") );
      $('.slider-time2').html( second_elem_html );

      // $('#inputTime2').val( '' );
      // console.log( $('#inputTime2').val() );

    }
});


$('.play').click(function(){
            var play = $(this);
            $(play).addClass('active').fadeOut();;
            $(play).parent().children('.circle-1').addClass('active');
            $(play).parent('.card').addClass('active');
            $(play).parent().children('.circle-2').addClass('active');
            $(play).parent().children('.spinner').delay(1000).fadeIn();
            $(play).parent().children('.spinner').delay(2000).fadeOut();
            $(play).parent().children('.message').delay(4000).fadeIn();
            $(play).parent().children('.message').delay(2000).fadeOut();
            setTimeout(function(){
                $(play).removeClass('active').fadeIn();
                $(play).parent().children('.circle-1').removeClass('active');
                $(play).parent().children('.circle-2').removeClass('active');
                $(play).parent('.card').removeClass('active');
            }, 7000)
        });




});

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

function durationCalculation(  values ){

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

}

function addZeroBeforeTime( value ){
    if( value < 10) {
        value = '0' + value;
    }
    return value;
}