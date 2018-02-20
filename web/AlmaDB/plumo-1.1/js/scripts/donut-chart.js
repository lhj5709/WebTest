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