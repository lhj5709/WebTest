/******************************/
/*                            */
/*           LINKS            */
/*                            */
/******************************/

$(document).on("click",'a[href="#"]',function(e){
    e.preventDefault();
});



/******************************/
/*                            */
/*        ELMT EXISTS         */
/*                            */
/******************************/

jQuery.fn.exists = function() {
	return jQuery(this).length > 0;
};



/******************************/
/*                            */
/*           SELECT           */
/*                            */
/******************************/

$('.selectpicker').selectpicker({
    dropupAuto : false,
    style : "custom-select"
});

$('.selectpicker').selectpicker('setStyle', 'btn dropdown-toggle', 'remove');

$('.bootstrap-select').on('show.bs.dropdown', function () {
    var form_group = $(this).closest(".form-group"),
        form_group_height = form_group.height(),
        dropdown = $(this).find("div.dropdown-menu"),
        dropdown_height = dropdown.height();
        
    dropdown.css("top","-" + ( (dropdown_height / 2) - (form_group_height / 2) ) + "px");
});



/******************************/
/*                            */
/*         ANIMATIONS         */
/*                            */
/******************************/

var Animations_Exemple = (function () {

    var selector = ".animations_example";

    var init = function(){
        
        if( $(selector).exists() ){
            listener_select();
            listener_animate_again();
            animate($(".animations_example__select").val());
        }
    };
    
    var listener_select = function(){
        $(".animations_example__select").change(function(){
           animate($(this).val()); 
        });
    }
    
    var listener_animate_again = function(){
        $(".animations_example__btn").click(function(){
            animate($(".animations_example__select").val());
        });
    }
    
    var animate = function(animation){
        $("#animations_example__class").text(animation).removeClass().addClass("animated " + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         AREA CHART         */
/*                            */
/******************************/

var Area_Chart = (function () {

    var selector = ".area-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        var height = chart.data("height") ? chart.data("height") : "auto";
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'area-spline',
                columns : data,
            },
            size: {
                height: height
            },
            padding: {
                top: 0,
                bottom: -8,
                left:-1,
                right:-1
            },
            axis: {
                x: {
                    show: false,
                    padding:{
                        left:0,
                        right:0
                    }
                },
                y: {
                    show: false,
                    padding:{
                        left:0,
                        right:0
                    }
                },
            },
            point: {
                show: false
            },
            legend: {
                show: false
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         BAR CHART          */
/*                            */
/******************************/

var Bar_Chart = (function () {

    var selector = ".bar-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        var height = chart.data("height") ? chart.data("height") : "auto";
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'bar',
                columns : data,
            },
            size: {
                height: height
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*        DONUT CHART         */
/*                            */
/******************************/

var Donut_Chart = (function () {

    var selector = ".donut-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        var title = chart.data("title") ? chart.data("title") : "";
        var height = chart.data("height") ? chart.data("height") : "auto";
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'donut',
                columns : data,
            },
            size: {
                height: height
            },
            donut:{
                title : title
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*        GAUGE CHART         */
/*                            */
/******************************/

var Gauge_Chart = (function () {

    var selector = ".gauge-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        var max = chart.data("max") ? chart.data("max") : 100;
        var min = chart.data("min") ? chart.data("min") : 0;
        var height = chart.data("height") ? chart.data("height") : "auto";
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'gauge',
                columns : data,
            },
            size: {
                height: height
            },
            gauge:{
                min : min,
                max : max
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         LINE CHART         */
/*                            */
/******************************/

var Area_Chart = (function () {

    var selector = ".line-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        var height = chart.data("height") ? chart.data("height") : "auto";
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                columns : data,
            },
            size: {
                height: height
            },
            legend: {
                show: false
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         PIE CHART          */
/*                            */
/******************************/

var Pie_Chart = (function () {

    var selector = ".pie-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'pie',
                columns : data,
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         STEP CHART         */
/*                            */
/******************************/

var Step_Chart = (function () {

    var selector = ".step-chart";

    var init = function(){
        
        if( $(selector).exists() ){
            $(selector).each(function(){
               render($(this));
            });
        }
    };
    
    var render = function(chart){

        var data = chart.data("values");
        var colors = chart.data("colors");
        
        var chart = c3.generate({
            bindto: chart.get(0),
            data:{
                type: 'area-step',
                columns : data,
            },
            point: {
                show: false
            }
        });
        
        if(colors){
            
            var colors_data = {}
            
            for(var i = 0 ; i < data.length ; i++){
                colors_data[data[i][0]] = colors[i];
            }
            
            chart.data.colors(colors_data);
        }
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*          CALENDAR          */
/*                            */
/******************************/

$(document).ready(function() {

    $('#calendar-demo').fullCalendar({
        header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
    	defaultDate: '2015-02-12',
    	editable: true,
    	eventLimit: true, // allow "more" link when too many events
    	events: [
    		{
    			title: 'All Day Event',
    			start: '2015-02-01'
    		},
    		{
    			title: 'Long Event',
    			start: '2015-02-07',
    			end: '2015-02-10'
    		},
    		{
    			id: 999,
    			title: 'Repeating Event',
    			start: '2015-02-09T16:00:00'
    		},
    		{
    			id: 999,
    			title: 'Repeating Event',
    			start: '2015-02-16T16:00:00'
    		},
    		{
    			title: 'Conference',
    			start: '2015-02-11',
    			end: '2015-02-13'
    		},
    		{
    			title: 'Meeting',
    			start: '2015-02-12T10:30:00',
    			end: '2015-02-12T12:30:00'
    		},
    		{
    			title: 'Lunch',
    			start: '2015-02-12T12:00:00'
    		},
    		{
    			title: 'Meeting',
    			start: '2015-02-12T14:30:00'
    		},
    		{
    			title: 'Happy Hour',
    			start: '2015-02-12T17:30:00'
    		},
    		{
    			title: 'Dinner',
    			start: '2015-02-12T20:00:00'
    		},
    		{
    			title: 'Birthday Party',
    			start: '2015-02-13T07:00:00'
    		},
    		{
    			title: 'Click for Google',
    			url: 'http://google.com/',
    			start: '2015-02-28'
    		}
    	]
    });

});



/******************************/
/*                            */
/*         DATATABLE          */
/*                            */
/******************************/

$(".datatable").bootgrid({
    caseSensitive: false,
    templates:{
        search: '<div class="search"><input type="text" placeholder="Search" class="search-field form-control"></div>'
    }
});



/******************************/
/*                            */
/*         DATEPICKER         */
/*                            */
/******************************/

$('.datepicker').pickadate();



/******************************/
/*                            */
/*            HUB             */
/*                            */
/******************************/

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



/******************************/
/*                            */
/*       INPUTS EFFECTS       */
/*                            */
/******************************/

var Inputs_Effect = (function () {

    var selector = "input[type='text'],input[type='password'], textarea";

    var init = function(){
        
        if( $(selector).exists() ){
            wrap();
            focus_listener();
        }
    };
    
    var wrap = function(){
        $(selector).each(function(){
            if(!($(this).closest(".form-group").hasClass("has-success") || $(this).closest(".form-group").hasClass("has-warning") || $(this).closest(".form-group").hasClass("has-error")))
                $(this).wrap('<div class="input-wrapper"/>');    
        });
        
    }
    
    var focus_listener = function(){
        $(selector).focus(function(){
            $(".input-wrapper").removeClass("focus");
            $(this).closest(".input-wrapper").addClass("focus");
        });
        
        $(selector).focusout(function(){
            $(".input-wrapper").removeClass("focus");
        });
    }
    
    return {
        init: init,
    };

})().init();



/******************************/
/*                            */
/*         NICESCROLL         */
/*                            */
/******************************/

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



/******************************/
/*                            */
/*          SIDEBAR           */
/*                            */
/******************************/

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



/******************************/
/*                            */
/*           SLIDER           */
/*                            */
/******************************/

if( $("#slider-demo").exists() ){

    var slider_demo = document.getElementById('slider-demo');
    
    noUiSlider.create(slider_demo, {
    	start: [ 20 ],
    	range: {
    		'min': [  0 ],
    		'max': [ 100 ]
    	}
    });

}



/******************************/
/*                            */
/*        SPREADSHEET         */
/*                            */
/******************************/

$(document).ready(function () {

	if( $("#spreadsheet").exists() ){
	
		var container = document.getElementById('spreadsheet');
		var percentRenderer = function (instance, td, row, col, prop, value, cellProperties) {
			Handsontable.renderers.NumericRenderer.apply(this, arguments);
			td.style.color = (value < 0) ? '#F44336' : '#4CAF50';
		};
		
		var advancedData = [
			["Afghanistan","30.552","1000s","2013","0.0244","27.708","24.019","11.215"],
			["Albania","2.774","1000s","2013","-0.0100","2.884","3.015","3.228"],
			["Algeria","39.208","1000s","2013","0.0189","36.383","33.461","25.577"],
			["Angola","21.472","1000s","2013","0.0313","18.927","15.977","10.051"],
			["Antigua and Barbuda","90","1000s","2013","0.0103","86","82","62"],
			["Argentina","41.446","1000s","2013","0.0087","40.024","38.309","32.17"],
			["Armenia","2.977","1000s","2013","0.025","2.968","3.026","3.543"],
			["Australia","23.131","1000s","2013","0.0179","21.692","20.127","16.814"],
			["Austria","8.474","1000s","2013","0.0052","8.365","8.172","7.62"],
			["Azerbaijan","9.296","1000s","2012","0.0134","8.763","8.234","6.994"],
			["Bahrain","1.332","1000s","2013","0.0109","1.192","821","481"],
			["Bangladesh","156.595","1000s","2013","0.0123","149.503","141.235","104.779"],
			["Barbados","285","1000s","2013","0.0050","279","272","258"],
			["Belarus","9.464","1000s","2012","-0.0010","9.528","9.797","10.14"],
			["Belgium","11.195","1000s","2013","0.0060","10.796","10.421","9.938"],
			["Belize","324","1000s","2012","0.0246","294","258","179"],
			["Benin","10.323","1000s","2013","0.0271","9.241","7.923","4.836"],
			["Bhutan","754","1000s","2013","0.0163","705","634","530"],
			["Bolivia","10.671","1000s","2013","0.0167","9.993","9.188","6.636"],
			["Bosnia and Herzegovina","3.829","1000s","2013","-0.0012","3.853","3.887","4.585"],
			["Botswana","2.021","1000s","2013","0.0086","1.952","1.855","1.343"],
			["Brazil","200.362","1000s","2013","0.0086","193.491","184.01","147.079"],
			["Brunei","418","1000s","2013","0.0135","394","361","250"],
			["Bulgaria","7.265","1000s","2013","-0.0056","7.444","7.781","8.877"],
			["Burkina Faso","16.935","1000s","2013","0.0288","15.095","13.034","8.58"],
			["Burundi","10.163","1000s","2013","0.0318","8.927","7.511","5.449"],
			["Cambodia","15.135","1000s","2013","0.0182","14.144","13.149","8.769"],
			["Cameroon","22.254","1000s","2013","0.0255","20.104","17.675","11.717"],
			["Canada","35.158","1000s","2013","0.0116","33.629","31.995","27.379"],
			["Cape Verde","499","1000s","2013","0.0091","486","474","346"],
			["Central African Republic","4.616","1000s","2013","0.0202","4.266","3.894","2.852"],
			["Chad","12.825","1000s","2013","0.0303","11.371","9.665","5.765"],
			["Chile","17.62","1000s","2013","0.0089","16.992","16.168","12.981"],
			["China","1.357.380","1000s","2013","0.0049","1.331.260","1.296.075","1.118.650"],
			["Colombia","48.321","1000s","2013","0.0129","45.803","42.528","32.657"],
			["Comoros","718","1000s","2012","0.0247","649","570","393"],
			["Congo","67.514","1000s","2013","0.0275","60.486","52.487","33.728"],
			["Congo-Brazzaville","4.448","1000s","2013","0.0255","3.995","3.449","2.32"],
			["Costa Rica","4.872","1000s","2013","0.0139","4.601","4.246","3.001"],
			["Croatia","4.253","1000s","2013","-0.0035","4.429","4.439","4.767"],
			["Cuba","11.266","1000s","2013","-0.0005","11.289","11.273","10.504"],
			["Cyprus","1.141","1000s","2013","0.0108","1.091","1.016","751"],
			["Czech Republic","10.521","1000s","2013","0.0010","10.444","10.197","10.361"],
			["Denmark","5.614","1000s","2013","0.0040","5.523","5.405","5.133"],
			["Djibouti","873","1000s","2013","0.0154","822","766","560"],
			["Dominica","72","1000s","2013","0.0045","71","70","71"],
			["Dominican Republic","10.404","1000s","2013","0.0124","9.884","9.207","7.099"],
			["Ecuador","15.492","1000s","2012","0.0161","14.512","13.28","9.651"],
			["Egypt","82.056","1000s","2013","0.0165","76.775","70.591","55.207"],
			["El Salvador","6.34","1000s","2013","0.0068","6.183","6.05","5.269"],
			["Equatorial Guinea","757","1000s","2013","0.0281","677","586","362"],
			["Eritrea","6.333","1000s","2013","0.0330","5.558","4.666","3.21"],
			["Estonia","1.325","1000s","2013","-0.0003","1.335","1.363","1.568"],
			["Ethiopia","94.101","1000s","2013","0.0259","84.838","74.066","46.435"],
			["Fiji","881","1000s","2013","0.0072","852","819","724"],
			["Finland","5.439","1000s","2013","0.0047","5.339","5.228","4.964"],
			["France","66.028","1000s","2013","0.0054","64.703","62.702","58.114"],
			["Gabon","1.672","1000s","2013","0.0240","1.519","1.347","921"],
			["Gambia","1.849","1000s","2013","0.0324","1.628","1.392","881"],
			["Georgia","4.477","1000s","2013","-0.0031","4.411","4.318","4.803"],
			["Germany","80.622","1000s","2013","0.0024","81.902","82.516","78.751"],
			["Ghana","25.905","1000s","2013","0.0212","23.692","20.836","14.233"],
			["Greece","11.032","1000s","2013","-0.0054","11.187","11.056","10.089"],
			["Grenada","106","1000s","2013","0.0039","104","103","97"],
			["Guatemala","15.468","1000s","2013","0.0256","13.989","12.368","8.688"],
			["Guinea","11.745","1000s","2013","2.57","10.593","9.38","5.751"],
			["Guinea-Bissau","1.704","1000s","2013","0.0245","1.551","1.391","995"],
			["Guyana","800","1000s","2013","0.0053","781","757","728"],
			["Haiti","10.317","1000s","2013","0.0141","9.765","9.13","6.965"],
			["Honduras","8.098","1000s","2013","0.0204","7.47","6.762","4.767"],
			["Hong Kong","7.188","1000s","2013","0.0046","6.973","6.784","5.686"],
			["Hungary","9.897","1000s","2013","-0.0023","10.023","10.107","10.482"],
			["Iceland","323","1000s","2013","0.0071","318","292","253"],
			["India","1.252.140","1000s","2013","0.0125","1.190.138","1.110.626","851.375"],
			["Indonesia","249.866","1000s","2013","0.0122","237.487","221.294","175.461"],
			["Iran","77.447","1000s","2013","0.0134","73.543","69.342","54.938"],
			["Iraq","33.417","1000s","2013","0.0258","30.163","26.674","17.074"],
			["Ireland","4.595","1000s","2013","0.0018","4.535","4.07","3.511"],
			["Israel","8.059","1000s","2013","0.0188","7.486","6.809","4.518"],
			["Italy","59.831","1000s","2013","0.0049","59.095","57.685","56.672"],
			["Ivory Coast","20.316","1000s","2013","0.0240","18.601","17.144","11.711"],
			["Jamaica","2.715","1000s","2013","0.0027","2.681","2.634","2.375"],
			["Japan","127.339","1000s","2013","-0.0017","127.558","127.761","123.116"],
			["Jordan","6.459","1000s","2013","0.0223","5.915","5.29","3.056"],
			["Kazakhstan","17.038","1000s","2013","0.0147","16.093","15.013","16.25"],
			["Kenya","44.354","1000s","2013","0.0272","39.825","34.835","22.667"],
			["Kiribati","102","1000s","2013","0.0155","96","89","69"],
			["Kosovo","1.824","1000s","2013","0.0093","1.761","1.705","1.827"],
			["Kuwait","3.369","1000s","2013","0.0363","2.85","2.196","2.059"],
			["Kyrgyzstan","5.72","1000s","2013","0.0200","5.383","5.105","4.308"],
			["Laos","6.77","1000s","2013","0.0186","6.268","5.699","4.123"],
			["Latvia","2.013","1000s","2013","-0.0103","2.142","2.263","2.667"],
			["Lebanon","4.467","1000s","2013","0.0096","4.247","3.854","2.677"],
			["Lesotho","2.074","1000s","2013","0.0112","1.99","1.912","1.57"],
			["Liberia","4.294","1000s","2013","0.0247","3.821","3.185","2.137"],
			["Libya","6.202","1000s","2013","0.0076","5.964","5.507","4.161"],
			["Lithuania","2.956","1000s","2013","-0.0106","3.163","3.377","3.684"],
			["Luxembourg","543","1000s","2013","0.0231","498","458","377"],
			["Macedonia","2.107","1000s","2013","0.0008","2.101","2.086","2.006"],
			["Madagascar","22.925","1000s","2013","0.0283","20.496","17.763","11.206"],
			["Malawi","16.363","1000s","2013","0.0287","14.573","12.569","9.105"],
			["Malaysia","29.717","1000s","2013","0.0163","27.79","25.365","17.707"],
			["Maldives","345","1000s","2013","0.0194","320","293","210"],
			["Mali","15.302","1000s","2013","0.0302","13.559","11.573","7.826"],
			["Malta","423","1000s","2013","0.0091","412","401","351"],
			["Mauritania","3.89","1000s","2013","0.0247","3.516","3.055","1.969"],
			["Mauritius","1.296","1000s","2013","0.0040","1.275","1.233","1.049"],
			["Mexico","122.332","1000s","2013","0.0123","116.423","109.382","84.327"],
			["Moldova","3.559","1000s","2013","-0.0001","3.566","3.604","3.681"],
			["Mongolia","2.839","1000s","2013","0.0152","2.672","2.496","2.141"],
			["Montenegro","621","1000s","2013","0.0005","619","615","612"],
			["Morocco","33.008","1000s","2013","0.0150","31.277","29.856","24.212"],
			["Mozambique","25.834","1000s","2013","0.0250","23.361","20.439","13.395"],
			["Myanmar","53.259","1000s","2013","0.0087","51.54","49.875","41.445"],
			["Namibia","2.303","1000s","2013","0.0194","2.143","2.003","1.361"],
			["Nepal","27.797","1000s","2013","0.0118","26.545","24.922","17.68"],
			["Netherlands","16.804","1000s","2013","0.0029","16.53","16.282","14.849"],
			["New Zealand","4.471","1000s","2013","0.0085","4.316","4.088","3.299"],
			["Nicaragua","6.08","1000s","2013","0.0148","5.743","5.386","4.046"],
			["Niger","17.831","1000s","2013","0.0393","15.303","12.709","7.52"],
			["Nigeria","173.615","1000s","2013","0.0283","155.381","135.999","93.18"],
			["North Korea","24.895","1000s","2013","0.0053","24.372","23.639","19.895"],
			["Norway","5.084","1000s","2013","0.0131","4.829","4.592","4.227"],
			["Oman","3.632","1000s","2013","0.0961","2.663","2.464","1.743"],
			["Pakistan","182.143","1000s","2013","0.0166","170.094","155.151","107.865"],
			["Panama","3.864","1000s","2013","0.0163","3.616","3.303","2.435"],
			["Papua New Guinea","7.321","1000s","2013","0.0215","6.705","5.948","4.057"],
			["Paraguay","6.802","1000s","2013","0.0172","6.347","5.793","4.139"],
			["Peru","30.376","1000s","2013","0.0129","28.934","27.404","21.326"],
			["Philippines","98.394","1000s","2013","0.0174","91.886","84.231","60.41"],
			["Poland","38.531","1000s","2013","-0.0001","38.152","38.182","37.962"],
			["Portugal","10.46","1000s","2013","-0.0052","10.568","10.484","10.005"],
			["Qatar","2.169","1000s","2013","0.0576","1.564","720","463"],
			["Romania","19.964","1000s","2013","-0.0056","20.367","21.452","23.161"],
			["Russia","143.5","1000s","2013","0.0022","141.909","143.821","147.721"],
			["Rwanda","11.777","1000s","2013","0.0278","10.53","9.254","7.224"],
			["Saint Kitts and Nevis","54","1000s","2013","0.0113","52","48","41"],
			["Saint Lucia","182","1000s","2013","0.0078","175","163","136"],
			["Saint Vincent and the Grenadines","109","1000s","2013","0.0000","109","109","107"],
			["Samoa","190","1000s","2013","0.0079","185","179","162"],
			["San Marino","31","1000s","2013","0.0064","31","29","24"],
			["Sao Tome and Principe","193","1000s","2013","0.0260","173","151","115"],
			["Saudi Arabia","28.829","1000s","2013","0.0191","26.796","23.839","15.665"],
			["Senegal","14.133","1000s","2013","0.0297","12.587","10.968","7.285"],
			["Serbia","7.164","1000s","2013","-0.0049","7.321","7.463","n.a."],
			["Seychelles","89","1000s","2013","0.0099","87","82","69"],
			["Sierra Leone","6.092","1000s","2013","0.0190","5.641","4.928","3.993"],
			["Singapore","5.399","1000s","2013","0.0163","4.988","4.167","2.931"],
			["Slovak Republic","5.414","1000s","2013","0.0012","5.386","5.372","5.276"],
			["Slovenia","2.06","1000s","2013","0.0016","2.04","1.997","1.996"],
			["Solomon Islands","561","1000s","2013","0.0212","515","458","303"],
			["Somalia","10.496","1000s","2013","0.0295","9.381","8.25","6.285"],
			["South Africa","52.982","1000s","2013","0.0135","50.223","47.019","34.491"],
			["South Korea","50.22","1000s","2013","0.0043","49.182","48.039","42.449"],
			["South Sudan","11.296","1000s","2013","0.0423","9.521","7.73","5.775"],
			["Spain","46.647","1000s","2013","-0.0024","46.363","42.922","38.791"],
			["Sri Lanka","20.483","1000s","2013","0.0076","20.45","19.435","16.825"],
			["Sudan","37.964","1000s","2013","0.0207","34.853","30.779","19.295"],
			["Suriname","539","1000s","2013","0.0089","520","493","400"],
			["Swaziland","1.25","1000s","2013","0.0151","1.174","1.095","834"],
			["Sweden","9.593","1000s","2013","0.0077","9.299","8.994","8.493"],
			["Switzerland","8.081","1000s","2013","0.0106","7.744","7.39","6.647"],
			["Syria","22.846","1000s","2013","0.0199","21.032","17.676","12.088"],
			["Tajikistan","8.208","1000s","2013","0.0248","7.447","6.664","5.16"],
			["Tanzania","49.253","1000s","2013","0.0308","43.64","37.765","24.686"],
			["Thailand","67.011","1000s","2013","0.0034","66.277","65.087","55.833"],
			["The Bahamas","377","1000s","2013","0.0146","354","322","252"],
			["Timor-Leste","1.178","1000s","2013","0.0255","1.049","967","730"],
			["Togo","6.817","1000s","2013","0.0262","6.144","5.398","3.685"],
			["Tonga","105","1000s","2013","0.0036","104","100","95"],
			["Trinidad and Tobago","1.341","1000s","2013","0.0028","1.323","1.29","1.214"],
			["Tunisia","10.886","1000s","2013","0.0101","10.44","9.932","7.959"],
			["Turkey","74.933","1000s","2013","0.0126","71.241","66.846","53.066"],
			["Turkmenistan","5.24","1000s","2013","0.0130","4.979","4.697","3.571"],
			["Tuvalu","10","1000s","2013","0.0016","10","10","9"],
			["UAE","9.346","1000s","2013","0.0153","7.718","3.659","1.707"],
			["Uganda","37.579","1000s","2013","0.0339","32.864","27.767","16.923"],
			["UK","64.097","1000s","2013","0.0063","62.276","59.988","57.077"],
			["Ukraine","45.49","1000s","2013","-0.0023","46.053","47.452","51.773"],
			["Uruguay","3.407","1000s","2013","0.0035","3.36","3.324","3.089"],
			["USA","316.129","1000s","2013","0.0072","306.772","292.805","246.819"],
			["Uzbekistan","30.241","1000s","2013","0.0157","27.767","25.864","20.077"],
			["Vanuatu","253","1000s","2013","0.0222","231","204","143"],
			["Venezuela","30.405","1000s","2013","0.0150","28.583","26.261","19.256"],
			["Vietnam","89.709","1000s","2013","0.0105","86.025","81.438","64.774"],
			["Yemen","24.407","1000s","2013","0.0233","22.23","19.613","11.27"],
			["Zambia","14.539","1000s","2013","0.0329","12.825","11.175","7.647"],
			["Zimbabwe","14.15","1000s","2013","0.0310","12.889","12.693","10.167"],
			["Zimbabwe","14.15","1000s","2013","0.0310","12.889","12.693","10.167"]
		];
		
		var hot = new Handsontable(container, {
			data: advancedData,
			height: 1000,
			colHeaders: ["Country", "Level", "Units", "As Of", "1Y Chg", "5Y Ago", "10Y Ago", "25Y Ago"],
			rowHeaders: true,
			stretchH: 'all',
			columnSorting: true,
			contextMenu: true,
			manualColumnResize: true,
    			manualRowResize: true,
			className: "htCenter htMiddle",
			columns: [
				{data: 0, type: 'text'},
				{data: 1, type: 'numeric', format: '0,0.00[0000]'},
				{data: 2, type: 'text'},
				{data: 3, type: 'numeric', format: '0'},
				{data: 4, type: 'numeric', format: '0.00%', renderer: percentRenderer},
				{data: 5, type: 'numeric', format: '0,0.00[0000]'},
				{data: 6, type: 'numeric', format: '0,0.00[0000]'}
			]
		});
	
	}
	
	if( $("#dashboard_spreadsheet").exists() ){
		
		var container = document.getElementById('dashboard_spreadsheet');
		
		var 	dashboard_spreadsheet_data = [
				['January',"$ 18,000"], 
				['February',"$ 19,000"], 
				['March',"$ 20,000"], 
				['April',"$ 22,000"], 
				['May',"$ 25,000"], 
				['June',"$ 25,500"], 
				['July',"$ 26,000"], 
				['August',"$ 26,000"], 
				['September',"$ 28,200"], 
				['October',"$ 27,400"], 
				['November',"$ 32,050"],
				['December',"$ 31,600"]
			];
		

		
		new Handsontable(container, {
			data: dashboard_spreadsheet_data,
			height: 397,
			colHeaders: ["Month","Sales"],
			rowHeaders: true,
			stretchH: 'all',
			columnSorting: true,
			contextMenu: true,
			manualColumnResize: true,
    			manualRowResize: true,
			className: "htCenter htMiddle"
		});
		
	}
  
});



/******************************/
/*                            */
/*         TODO LIST          */
/*                            */
/******************************/

var Todo_List = (function () {

    var selector = ".widget-todo_list";

    var init = function(){
        
        if( $(selector).exists() ){
            $(".widget-todo_list__todo").click(function(){
                toggle($(this));
            });
        }
    };
    
    var toggle = function(todo){
        todo.toggleClass("done");
    }
    
    return {
        init: init,
    };

})().init();


