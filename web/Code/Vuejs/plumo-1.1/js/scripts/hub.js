var Hub = (function () {

    var selector = ".hub",
        wrapper = $("#dashboard__wrapper"),
        hub_filters = $(".hub__filter"),
        hub_entries = $(".hub__entry");
        

    var init = function(){
        
        if( $(selector).exists() ){
            filter_listener();
            toggle_listener();
        }
    };
    
    var toggle_listener = function(){
        $(".hub-toggle").click(function(){
            toggle();
        });
        
        $(".dashboard__overlay").click(function(){
            if(wrapper.hasClass("hub-open"))
                toggle();
        });
    }
    
    
    var open = function(){
        wrapper.removeClass("hub-closed").removeClass("sidebar-open").addClass("hub-open");
        $(window).trigger("resize");
        window.dispatchEvent(new Event('resize'));
    }
    
    var close = function(){
        wrapper.removeClass("hub-open").addClass("hub-closed");
        $(window).trigger("resize");
        window.dispatchEvent(new Event('resize'));
    }
    
    var toggle = function(){
        
        if( $(window).width() < 1500){
            
            if( wrapper.hasClass("hub-open") )
                close();
            else
                open();
        }
        else{
            
            if( !wrapper.hasClass("hub-closed") )
                close();
            else
                open();
        }
    }
    
    var filter_listener = function(){
        
        hub_filters.click(function(){
           filter($(this));
        });
        
    }
    
    var filter = function( filter ){
        hub_filters.removeClass("active");
        filter.addClass("active");
        
        var data_filter = filter.data("filter");
        
        if(data_filter){
            $(".hub__inner").fadeOut(200, function(){
                hub_entries.removeClass("hidden").not(".hub__entry--" + data_filter).addClass("hidden");
            });
            $(".hub__inner").fadeIn(200);
        }
        else{
            $(".hub__inner").fadeOut(200, function(){
                hub_entries.removeClass("hidden");
            });
            $(".hub__inner").fadeIn(200);
        }
    }
    
    return {
        init: init,
    };

})().init();