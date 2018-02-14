// Read String Query
var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));


// data init
function ScheduleDataInitialize(){
  ScheduleInputData.date = $(".SelectedDate .SQ_Date").innerHTML;
  ScheduleInputData.eventcounts = 0;
  ScheduleInputData.eventdata = [];
  ScheduleInputData.schedulecounts = 0;
  ScheduleInputData.scheduledata = [];
  ScheduleInputData.geniexcounts = 0;
  ScheduleInputData.geniexdata = [];

  InputSelectInit();
};

function InputSelectInit(){
  // noon setting
  $(".Schedule #startnoon").append("<option value='none'>미정</option><option value='morning'>오전</option><option value='afternoon'>오후</option>");
  $(".Schedule #endnoon").append("<option value='none'>미정</option><option value='morning'>오전</option><option value='afternoon'>오후</option>");
  // hour setting
  var starthourelem = document.getElementById('starthour'),
  starthourdf = document.createDocumentFragment();
  var endhourelem = document.getElementById('endhour'),
  endhourdf = document.createDocumentFragment();
  for(i = 0; i < 12; i++){
    var optionstarthour = document.createElement('option');
    optionstarthour.value = i;
    optionstarthour.appendChild(document.createTextNode(i + "시"));
    starthourdf.appendChild(optionstarthour);

    var optionendhour = document.createElement('option');
    optionendhour.value = i;
    optionendhour.appendChild(document.createTextNode(i + "시"));
    endhourdf.appendChild(optionendhour);
  }
  starthourelem.appendChild(starthourdf);
  endhourelem.appendChild(endhourdf);

  //min setting
  var startminelem = document.getElementById('startmin'),
  startmindf = document.createDocumentFragment();
  var endminelem = document.getElementById('endmin'),
  endmindf = document.createDocumentFragment();
  for(i = 0; i < 60; i++){
    var optionstartmin = document.createElement('option');
    optionstartmin.value = i;
    optionstartmin.appendChild(document.createTextNode(i + "분"));
    startmindf.appendChild(optionstartmin);

    var optionendmin = document.createElement('option');
    optionendmin.value = i;
    optionendmin.appendChild(document.createTextNode(i + "분"));
    endmindf.appendChild(optionendmin);
  }
  startminelem.appendChild(startmindf);
  endminelem.appendChild(endmindf);
};

// load database
function LoadScheduleData(){

};
