$(document).ready(function() {
    $("#myCarousel .item").on("click",function(){
        window.location.href = "index.html";
    });
    
    $("#myCarousel2 .item").on("click",function(){
        
    });

    // for side bar open and close function
    $('#openNav').on('click',function() {
        $('#mySidebar').fadeIn();
    });
    $('#cancleNav').on('click',function() {
        $('#mySidebar').hide();
    });

   $("#start").on('click',function(){ 
        $("#bar").fadeIn(); 
        $("#fs-subtitle").fadeIn();
        $("#q1").fadeIn();
        $(this).hide();
        $("#next").fadeIn();
    });
    
    // add photos
    $(".beforeafterphotos").hide();
    
    $("#photoupload").on("click",function(){
        $(".beforeafterphotos").hide();
        $("#ellipsis").show();
        setTimeout(
                function(){
                    $("#ellipsis").hide();
                    $(".beforeafterphotos").fadeIn("slow");
            },3000);
        
    });
    
});