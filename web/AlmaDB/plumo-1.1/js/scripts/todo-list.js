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