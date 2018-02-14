var Sidebar = (function () {

    var selector = ".dashboard__sidebar",
        wrapper = $("#dashboard__wrapper");

    var init = function(){
        
        if( $(selector).exists() ){
            toggle_listener();
        }
    };
    
    var toggle_listener = function(){
        $(".sidebar-toggle").click(function(){
            toggle();
        });
        
        $(".dashboard__overlay").click(function(){
            if(wrapper.hasClass("sidebar-open"))
                toggle();
        });
    }
    
    var open = function(){
        wrapper.removeClass("sidebar-closed").removeClass("hub-open").addClass("sidebar-open");
        $(window).trigger("resize");
        window.dispatchEvent(new Event('resize'));
    }
    
    var close = function(){
        wrapper.removeClass("sidebar-open").addClass("sidebar-closed");
        $(window).trigger("resize");
        window.dispatchEvent(new Event('resize'));
    }
    
    var toggle = function(){
        
        
        if( $(window).width() < 768){
            
            if( wrapper.hasClass("sidebar-open") )
                close();
            else
                open();
        }
        else{
            
            if( !wrapper.hasClass("sidebar-closed") )
                close();
            else
                open();
        }
        
    }
    
    return {
        init: init,
        open: open,
        close: close
    };

})();

Sidebar.init();