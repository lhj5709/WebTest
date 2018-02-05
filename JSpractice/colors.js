var Body = {
  setColor:function (color){
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    $('body').css('backgroundColor', color);
  }
}
var Link = {
   setColor:function (color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while (i < alist.length) {
  //     alist[i].style.color = color;
  //     i += 1;
  //   }
    $('a').css('color',color);
   }
}
function LightModeToggle()
{
  var elem = document.getElementById("LightModeToggle");
  var target = document.querySelector("body");
  if(elem.value == "night")
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    elem.value = "day";

    Link.setColor('powderblue');
  }
  else {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    elem.value = "night";

    Link.setColor('blue');
    }
  }
