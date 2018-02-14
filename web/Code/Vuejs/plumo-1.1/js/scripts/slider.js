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