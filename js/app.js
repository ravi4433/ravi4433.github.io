$(function(){
    $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    $('nav a').bind('click',function(){
        $($(this).attr('href')).animatescrolll({scrollspeed: 3000, padding:50});
        event.preventDefault();
    });

    $('.progress-bar').each(function() {
       var bar_value= $(this).attr('aria-valuenow') + '%';
       console.log(bar_value);
       $(this).animate( {width: bar_value},5000,"linear");
    });
})

//{ duration: 2000, easing: 'easeOutCirc' }