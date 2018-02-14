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