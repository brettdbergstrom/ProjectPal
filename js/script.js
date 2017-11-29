$(document).ready(function() {
    $('#openNav').on('click',function() {
        $('#mySidebar').fadeIn();
    });
    $('#cancleNav').on('click',function() {
        $('#mySidebar').hide();
    });
    $('#createaccount').mouseenter(function() {
        $('#createaccount').fadeTo('fast', 1);
    })
    $('#createaccount').mouseleave(function() {
        $('#createaccount').fadeTo('slow',0.5);
    });
});


var bounce = new TimelineLite({onComplete:function(){bounce.reverse()},onReverseComplete:function(){bounce.play()}})
bounce.to("#bend", .15, {morphSVG:"#unbend", ease:Linear.easeInOut})
.to('#dog',1,{rotation:-15,transformOrigin:'50% 50%',physicsProps:{y:{velocity:-780, angle:90, friction:0.11, acceleration:1.5}}},'-=.15').to(['#backLegs path','#frontLegs path'],.5,{y:-3,rotation:20},'-=1')
bounce.timeScale(1.5)



/* Text Editor JS */
/*
$('#bold').on('click', function() {
   document.execCommand('bold', false, null);
});

$('#italic').on('click', function() {
   document.execCommand('italic', false, null);
});

$('#underline').on('click', function() {
   document.execCommand('underline', false, null);
});

$('#align-left').on('click', function() {
   document.execCommand('justifyLeft', false, null);
});

$('#align-center').on('click', function() {
   document.execCommand('justifyCenter', false, null);
});

$('#align-right').on('click', function() {
   document.execCommand('justifyRight', false, null);
});

$('#list-ul').on('click', function() {
   document.execCommand('insertUnorderedList', false, null);
});

$('#list-ol').on('click', function() {
   document.execCommand('insertOrderedList', false, null);
});

$('#fonts').on('change', function() {
   var font = $(this).val();
   document.execCommand('fontName', false, font);
});

$('#size').on('change', function() {
   var size = $(this).val();
   $('.editor').css('fontSize', size + 'px');
});

$('#color').spectrum({
   color: '#000',
   showPalette: true,
   showInput: true,
   showInitial: true,
   showInput: true,
   preferredFormat: "hex",
   showButtons: false,
   change: function(color) {
      color = color.toHexString();
      document.execCommand('foreColor', false, color);
   }
});

$('.editor').perfectScrollbar(); */


/* Brian's Notes workaround*/


$(document).ready(function(){

    // text for Nov. 12 and Dec. 5
    var novTxt = "My notes for Nov. 12."
    var decTxt = "";
    
    // initially hide the second button (Dec 5.)
    $("#dec5").hide();    
    
    //when the user clicks on Nov. 7 button, the modal is filled with the correct content
    $("#nov12").on("click",function(){
        fillNote(novTxt,this.id);
    });
    
    // when the user clicks on Dec. 5 button, the modal is filled with the correct content
    $("#dec5").on("click",function(){
        fillNote(decTxt,this.id);
    });
    
    // when the user clicks "Add Note" it creates a new button
    $("#new").on("click",function(){
        fillNote(decTxt,"dec5");
    });
    
    // function that will handle placing the correct text inside the modal textbox
    function fillNote(txt,id){
        $("#comment").text(txt);
        
        if(id == "nov12"){
            $("#note h4").text("Notes - Nov. 12");
            novTxt = txt; // update novTxt with latest updates
            $("#comment").val(novTxt);
            console.log("novTxt="+novTxt);
        } else if (id == "dec5"){
            $("#note h4").text("Notes - Dec. 5");
            decTxt = txt; // update decTxt with latest updates
            $("#comment").val(decTxt);
            console.log("decTxt="+decTxt);
        }
    }
    
    // when user closes the modal, save any text edits
    $("#x,#btn").on("click",function(){
       closeModal(); 
    });
    
    // function to handle the close+save process
    function closeModal(){
        
        if($("#note h4").text() == "Notes - Nov. 12"){
            novTxt = $("#comment").val();
        }
        else if($("#note h4").text() == "Notes - Dec. 5"){
            $("#dec5").show();
            decTxt = $("#comment").val();
        }
    }
    
    
    
});



/* Calendar JS */
$(document).ready(function(){


// script goes here
$("#fifth").on('click',function(){
    $("#commentbox").toggle();
})
    




});

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>


