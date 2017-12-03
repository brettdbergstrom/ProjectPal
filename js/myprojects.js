$(document).ready(function() {
    $("#myCarousel .item").on("click",function(){
        window.location.href = "index.html";
    });
    
    $("#myCarousel2 .item").on("click",function(){
        
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