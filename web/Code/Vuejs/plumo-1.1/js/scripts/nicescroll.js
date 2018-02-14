$(document).ready(function(){
    
    $(".dashboard__sidebar-scroll, .dashboard__hub-scroll").niceScroll({
        scrollspeed:30,
        cursorcolor:"#BDBDBD",
        cursorborder:"none",
        cursorborderradius:0,
        hidecursordelay:100
    });
    
    $("html").niceScroll({
        scrollspeed:5,
        cursorcolor:"#BDBDBD",
        cursorborder:"none",
        cursorborderradius:0,
        zindex:10,
        hidecursordelay:100
    });

    $(window).trigger("resize");

});