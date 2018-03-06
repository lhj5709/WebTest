
var Instance = new Vue({
  el:'.vue-app',
  data:{
    // contents_A
    CA_box_01_title: 'Total',
    CA_box_01_value: 0,
    CA_box_01_tail: 'Experience Count',
    CA_box_02_title: 'Today',
    CA_box_02_value: 0,
    CA_box_02_tail: 'Experience Count',
    CA_box_03_title: 'This week',
    CA_box_03_value: 0,
    CA_box_03_tail: 'Experience Count',

    // contents_B
    CB_Daily_title : "Today's Total",
    CB_Daily_str01 : 'The Total of daily average',
    CB_Daily_str02 : 'The Total of yesterday',
    CB_Daily_countCur: 0,
    CB_Daily_countAvg: 0,
    CB_Daily_countLast: 0,
    CB_Weekly_title : "Week's Total",
    CB_Weekly_str01 : 'The Total of weekly average',
    CB_Weekly_str02 : 'The Total of last week',
    CB_Weekly_countCur: 0,
    CB_Weekly_countAvg: 0,
    CB_Weekly_countLast: 0,
    CB_Monthly_title : "Month's Total",
    CB_Monthly_str01 : 'The Total of weekly average',
    CB_Monthly_str02 : 'The Total of last month',
    CB_Monthly_countCur: 0,
    CB_Monthly_countAvg: 0,
    CB_Monthly_countLast: 0,
    CB_Display_title : "Today's Total",
    CB_Display_str01 : 'The Total of daily average',
    CB_Display_str02 : 'The Total of yesterday',
    CB_Display_countCur: 0,
    CB_Display_countAvg: 0,
    CB_Display_countLast: 0,
    // CB_ChartLegend_Daily_01 : 'Today',
    // CB_ChartLegend_Daily_02 : 'Yesterday',
    // CB_ChartLegend_Daily_03 : 'Daily Average',
    // CB_ChartLegend_Weekly_01 : 'This Week',
    // CB_ChartLegend_Weekly_02 : 'Last Week',
    // CB_ChartLegend_Weekly_03 : 'Weekly Average',
    // CB_ChartLegend_Monthly_01 : 'This Month',
    // CB_ChartLegend_Monthly_02 : 'Last Month',
    // CB_ChartLegend_Monthly_03 : 'Monthly Average',
    // CB_ChartLegend_Now_01: 'Today',
    // CB_ChartLegend_Now_02: 'Yesterday',
    // CB_ChartLegend_Now_03: 'Daily Average',



    // contents_C
    CC_Main_Imagesrc: '',
    CC_Main_Color : 'bg-primary',
    CC_Main_Title : this.bbq,
    CC_substring_01 : 'Today',
    CC_substring_02 : 'Daily Average',
    CC_Display_Cur : 0,
    CC_Display_Avg : 0,
    CC_Display_Total : 0,
    CC_IsPieChart : false,
    CC_ChartPeriod : 0,
    CC_SelectedItem: 1,
    CC_Today_bbq_Cur: 0,
    CC_Today_bbq_Avg: 0,
    CC_Today_boar_Cur: 0,
    CC_Today_boar_Avg: 0,
    CC_Today_deer_Cur: 0,
    CC_Today_deer_Avg: 0,
    CC_Today_fish_Cur: 0,
    CC_Today_fish_Avg: 0,
    CC_Today_ghL_Cur: 0,
    CC_Today_ghL_Avg: 0,
    CC_Today_ghR_Cur: 0,
    CC_Today_ghR_Avg: 0,
    CC_Today_handaxe_Cur: 0,
    CC_Today_handaxe_Avg: 0,
    CC_Today_think_Cur: 0,
    CC_Today_think_Avg: 0,
    CC_Week_bbq_Cur: 0,
    CC_Week_bbq_Avg: 0,
    CC_Week_boar_Cur: 0,
    CC_Week_boar_Avg: 0,
    CC_Week_deer_Cur: 0,
    CC_Week_deer_Avg: 0,
    CC_Week_fish_Cur: 0,
    CC_Week_fish_Avg: 0,
    CC_Week_ghL_Cur: 0,
    CC_Week_ghL_Avg: 0,
    CC_Week_ghR_Cur: 0,
    CC_Week_ghR_Avg: 0,
    CC_Week_handaxe_Cur: 0,
    CC_Week_handaxe_Avg: 0,
    CC_Week_think_Cur: 0,
    CC_Week_think_Avg: 0,
    CC_bbq_Total: 0,
    CC_boar_Total: 0,
    CC_deer_Total: 0,
    CC_fish_Total: 0,
    CC_ghL_Total: 0,
    CC_ghR_Total: 0,
    CC_handaxe_Total: 0,
    CC_think_Total: 0,


    // footer
    FT_Subject_01: '소프트웨어 / 하드웨어',
    FT_Name_01: '박호열',
    FT_Phone_01: '010-5324-8319',
    FT_Email_01: 'hypark@almaloco.com',
    FT_Subject_02: '디자인 / 운영',
    FT_Name_02: '최유영',
    FT_Phone_02: '010-4643-8046',
    FT_Email_02: 'uychoi@almaloco.com',
    FT_Subject_03: 'PC 관련',
    FT_Name_03: '이재화',
    FT_Phone_03: '010-2999-7091',
    FT_Email_03: 'jhlee@almaloco.com',

    // string dataLen
    // bbq: '고기를 굽는 구석기인',
    // boar: '멧돼지에게 쫓기는 구석기인',
    // deer: '사슴을 사냥하는 구석기인',
    // fish: '물고기 사냥하는 구석기인',
    // ghL: '구석기인의 막집 생활상 1',
    // ghR: '구석기인의 막집 생활상 2',
    // handaxe: '손도끼 만드는 구석기인',
    // think: '생각하는 구석기인'
  },
  methods: {
    loadData: function(){
      // jquery load json
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/expcount/',
      function(data) {
          /*optional stuff to do after success */
          this.CA_box_01_value = data['total'];
          this.CA_box_02_value = data['today'];
          this.CA_box_03_value = data['week'];

          console.log('Contents_A Data load complete!' +   this.CA_box_01_value);
      }.bind(this));
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/day/line/',
      function(data) {
        this.CB_Daily_countCur = data['count_cur'];
        this.CB_Daily_countAvg = data['count_avrg'];
        this.CB_Daily_countLast = data['count_past'];
        this.CB_Display_countCur = data['count_cur'];
        this.CB_Display_countAvg = data['count_avrg'];
        this.CB_Display_countLast = data['count_past'];

        //console.log('Contents_B Data load complete! ' + this.CB_Daily_countCur);
      }.bind(this));
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/week/line/',
      function(data) {
        this.CB_Weekly_countCur = data['count_cur'];
        this.CB_Weekly_countAvg = data['count_avrg'];
        this.CB_Weekly_countLast = data['count_past'];

        //console.log('Contents_B Data load complete! ' + this.CB_Daily_countCur);
      }.bind(this));
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/month/line/',
      function(data) {
        this.CB_Monthly_countCur = data['count_cur'];
        this.CB_Monthly_countAvg = data['count_avrg'];
        this.CB_Monthly_countLast = data['count_past'];

      }.bind(this));
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/day/pieline/',
      function(data) {
        this.CC_Main_Color = 'bg-primary';
        this.CC_Main_Title = '고기 굽는 구석기인';
        this.CC_Today_bbq_Cur = data['bbq_cur'];
        this.CC_Today_bbq_Avg = data['bbq_avrg'];
        this.CC_Today_boar_Cur = data['boar_cur'];
        this.CC_Today_boar_Avg = data['boar_avrg'];
        this.CC_Today_deer_Cur = data['deer_cur'];
        this.CC_Today_deer_Avg = data['deer_avrg'];
        this.CC_Today_fish_Cur = data['fish_cur'];
        this.CC_Today_fish_Avg = data['fish_avrg'];
        this.CC_Today_ghL_Cur = data['grasshutL_cur'];
        this.CC_Today_ghL_Avg = data['grasshutL_avrg'];
        this.CC_Today_ghR_Cur = data['grasshutR_cur'];
        this.CC_Today_ghR_Avg = data['grasshutR_avrg'];
        this.CC_Today_handaxe_Cur = data['handaxe_cur'];
        this.CC_Today_handaxe_Avg = data['handaxe_avrg'];
        this.CC_Today_think_Cur = data['think_cur'];
        this.CC_Today_think_Avg = data['think_avrg'];

        this.ClickChartColume(1);
      }.bind(this));
      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/week/pieline/',
      function(data) {
        this.CC_Week_bbq_Cur = data['bbq_cur'];
        this.CC_Week_bbq_Avg = data['bbq_avrg'];
        this.CC_Week_boar_Cur = data['boar_cur'];
        this.CC_Week_boar_Avg = data['boar_avrg'];
        this.CC_Week_deer_Cur = data['deer_cur'];
        this.CC_Week_deer_Avg = data['deer_avrg'];
        this.CC_Week_fish_Cur = data['fish_cur'];
        this.CC_Week_fish_Avg = data['fish_avrg'];
        this.CC_Week_ghL_Cur = data['grasshutL_cur'];
        this.CC_Week_ghL_Avg = data['grasshutL_avrg'];
        this.CC_Week_ghR_Cur = data['grasshutR_cur'];
        this.CC_Week_ghR_Avg = data['grasshutR_avrg'];
        this.CC_Week_handaxe_Cur = data['handaxe_cur'];
        this.CC_Week_handaxe_Avg = data['handaxe_avrg'];
        this.CC_Week_think_Cur = data['think_cur'];
        this.CC_Week_think_Avg = data['think_avrg'];

        this.CC_bbq_Total = data['bbq_total'];
        this.CC_boar_Total = data['boar_total'];
        this.CC_deer_Total = data['deer_total'];
        this.CC_fish_Total = data['fish_total'];
        this.CC_ghL_Total = data['grasshutL_total'];
        this.CC_ghR_Total = data['grasshutR_total'];
        this.CC_handaxe_Total = data['handaxe_total'];

      }.bind(this));

    },
    initialize : function() {


      this.drawChart_01(0);
      this.drawChart_02();
      this.drawChart_03();

      console.log(this.CB_ChartLegend_Now_03);
    },
    drawChart_01: function(period) {
      if(period == 0) {
        this.CB_Display_title = this.CB_Daily_title;
        this.CB_Display_str01 = this.CB_Daily_str01;
        this.CB_Display_str02 = this.CB_Daily_str02;
        this.CB_Display_countCur = this.CB_Daily_countCur;
        this.CB_Display_countAvg = this.CB_Daily_countAvg;
        this.CB_Display_countLast = this.CB_Daily_countLast;
        var url = 'http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/day/line/';
      }
      else if(period == 1) {
        this.CB_Display_title = this.CB_Weekly_title;
        this.CB_Display_str01 = this.CB_Weekly_str01;
        this.CB_Display_str02 = this.CB_Weekly_str02;
        this.CB_Display_countCur = this.CB_Weekly_countCur;
        this.CB_Display_countAvg = this.CB_Weekly_countAvg;
        this.CB_Display_countLast = this.CB_Weekly_countLast;
        var url = 'http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/week/line/';
      }
      else if(period == 2) {
        this.CB_Display_title = this.CB_Monthly_title;
        this.CB_Display_str01 = this.CB_Monthly_str01;
        this.CB_Display_str02 = this.CB_Monthly_str02;
        this.CB_Display_countCur = this.CB_Monthly_countCur;
        this.CB_Display_countAvg = this.CB_Monthly_countAvg;
        this.CB_Display_countLast = this.CB_Monthly_countLast;
        var url = 'http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/month/line/';
      }

      $.getJSON(url,

        function (data){

          //console.log(data['chart_past']);

          // var Revdata = new Array();
          // var Overdata = new Array();
          //
          // for(i = 0; i < data.length; i++){
          //   Revdata.push(data['Revenue'][i].key, data['Revenue'][i].value);
          //   Overdata.push(data['Overhead'][i].key, data['Overhead'][i].value);
          // }


          Highcharts.chart('almachart_02',{
            chart: {
                type: 'area',
                spacingBottom: 30,
                height: 293,
                backgroundColor: 'rgba(0,0,0,0)'
            },
            title: {
                text: ''
            },
            exporting: {
                enabled: false
            },
            subtitle: {
                text: '',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 0,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                categories: data['chart_row']
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y;
                }
            },
            plotOptions: {

            },
            tooltip: {
              enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Current',
                data: data['chart_cur'],
                 lineWidth: '1',
                color: '#CB3E4B',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(203,62,75,.2)'],
                                [1, 'rgba(203,62,75,0)']
                                ]}
            }, {
                name: 'Last',
                data: data['chart_past'],
                 lineWidth: '1',
                color: '#3BBDA8',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(59,189,168,.2)'],
                                [1, 'rgba(59,189,168,0)']
                                ]}
            },  {
                name: 'Average',
                data: data['chart_avrg'],
                 lineWidth: '1',
                color: '#A072FC',
                fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(160,114,252,.2)'],
                                [1, 'rgba(160,114,252,0)']
                                ]}
            }]
          });
        }
      )
    },
    drawChart_02: function() {
      if(this.CC_ChartPeriod == 0) {
        var url = 'http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/day/pieline/';
      }
      else if(this.CC_ChartPeriod == 1) {
        var url = 'http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/week/pieline/';
      }


      if(this.CC_IsPieChart){
        $.getJSON(url,
        function(data){


          // Pie charts
          Highcharts.chart('almachart_03',
          {
            chart: {
                backgroundColor : '#242020',
                plotBackgroundColor: '#242020',
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 120 + '%',
                style: {'fill': 'white'}
            },
            title: {
                text: ''
            },
             credits: {
            enabled: false
          },
            legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'vertical',
            x: 0,
            y: 0,
            itemStyle:{'color':'white', 'fontWeight':''}
          },
          exporting: {
            enabled: false
          },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                     borderColor: '#242420',
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                    // events: {
                    //       click: function (event) {
                    //           alert(
                    //               this.name + ' clicked\n'
                    //           );
                    //       }
                    //   }
                }
            },
            series: [{
                name: '터치 수',
                colorByPoint: true,
                data: [{
                    name: '고기를 굽는 구석기인',
                    y: data['pie_bbq'],
                    color: '#2E9BDA'
                }, {
                    name: '멧돼지에게 쫓기는 구석기인',
                    y: data['pie_boar'],
                     color: '#3BBDA8'
                }, {
                    name: '사슴을 사냥하는 구석기인',
                    y: data['pie_deer'],
                    color: '#CB3E4B'
                }, {
                    name: '물고기 사냥하는 구석기인',
                    y: data['pie_fish'],
                    color: '#A072FC'
                },{
                    name: '구석기인의 막집 생활상 1',
                    y: data['pie_grasshutL'],
                    color: '#5b73fc'
                },{
                    name: '구석기인의 막집 생활상 2',
                    y: data['pie_grasshutR'],
                    color: '#78fd9a'
                },{
                    name: '손도끼 만드는 구석기인',
                    y: data['pie_handaxe'],
                    color: '#0058a1'
                },{
                    name: '생각하는 구석기인',
                    y: data['pie_think'],
                    color: '#a82084'
                }]
            }]
          });
        })
      }
      else{
        $.getJSON(url,
        function(data) {
          Highcharts.chart('almachart_03', {
              chart: {
                   type: 'column',
                   backgroundColor: 'transparent'
               },
               title: {
                   text: ''
               },
               subtitle: {
                   text: ''
               },
               xAxis: {

               },
               yAxis: {
                   min: 0,
                   // title: {
                   //     text: ''
                   // }
               },
               credits: {
                   enabled: false
               },
                   legend: {
                   enabled: false
               },
                  exporting: {
                   enabled: false
               },
               tooltip: {
                   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                   pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:   </td>' +
                       '<td style="padding:0;text-align:center;"><b>{point.y}</b></td></tr>',
                   footerFormat: '</table>',
                   shared: true,
                   useHTML: true
               },
               plotOptions: {
                   column: {
                       pointPadding: 0.2,
                       borderWidth: 0
                   },
                   series: {
                     cursor: 'pointer',
                     point: {
                     events: {
                     // click: function (e) {
                     //   alert('Category: ' + this.name + ', value: ' + this.y + ' number:' + this.number);
                     //
                     //   Instance.ClickChartColume(e.number);
                     //  }
                    }
                  }
                }
               },
               series: [{
                   name: 'Touch Count',
                   colorByPoint: true,
                   data: [{
                       name: '고기를 굽는 구석기인',
                       y: data['pie_bbq'],
                       color: '#2E9BDA',
                       number: 1,
                   }, {
                       name: '멧돼지에게 쫓기는 구석기인',
                       y: data['pie_boar'],
                        color: '#3BBDA8',
                        number: 2,
                   }, {
                       name: '사슴을 사냥하는 구석기인',
                       y: data['pie_deer'],
                       color: '#CB3E4B',
                       number: 3,
                   }, {
                       name: '물고기 사냥하는 구석기인',
                       y: data['pie_fish'],
                       color: '#A072FC',
                       number: 4,
                   },{
                       name: '구석기인의 막집 생활상 1',
                       y: data['pie_grasshutL'],
                       color: '#5b73fc',
                       number: 5,
                   },{
                       name: '구석기인의 막집 생활상 2',
                       y: data['pie_grasshutR'],
                       color: '#78fd9a',
                       number: 6,
                   },{
                       name: '손도끼 만드는 구석기인',
                       y: data['pie_handaxe'],
                       color: '#0058a1',
                       number: 7,
                   },{
                       name: '생각하는 구석기인',
                       y: data['pie_think'],
                       color: '#a82084',
                       number: 8,
                   }]

               }]
          });
        })
      }

    },
    drawChart_03 : function() {

      $.getJSON('http://ec2-52-79-38-193.ap-northeast-2.compute.amazonaws.com/almadb/day/pieline/',

       function (data){

         // console.log(data['bbq']);

         // var Revdata = new Array();
         // var Overdata = new Array();
         //
         // for(i = 0; i < data.length; i++){
         //   Revdata.push(data['Revenue'][i].key, data['Revenue'][i].value);
         //   Overdata.push(data['Overhead'][i].key, data['Overhead'][i].value);
         // }


         var almachart_CC = new Highcharts.chart('almachart_04',{
           chart: {
               height: 220,
               backgroundColor: 'rgba(0,0,0,0)',
               events: {
                 load: function() {
                   setInterval(function() {

                     for(i = 0; i < 8; i++){
                       almachart_CC.series[i].options.color = '#5c5c5c';
                       almachart_CC.series[i].options.zIndex = 1;
                       almachart_CC.series[i].update(almachart_CC.series[i].options);
                     }
                     var target = Instance.CC_SelectedItem - 1;
                     if(Instance.CC_SelectedItem == 1){
                       almachart_CC.series[target].options.color = '#2E9BDA';
                     }
                     else if(Instance.CC_SelectedItem == 2){
                       almachart_CC.series[target].options.color = '#3BBDA8';
                     }
                     else if(Instance.CC_SelectedItem == 3){
                       almachart_CC.series[target].options.color = '#CB3E4B';
                     }
                     else if(Instance.CC_SelectedItem == 4){
                       almachart_CC.series[target].options.color = '#A072FC';
                     }
                     else if(Instance.CC_SelectedItem == 5){
                       almachart_CC.series[target].options.color = '#5b73fc';
                     }
                     else if(Instance.CC_SelectedItem == 6){
                       almachart_CC.series[target].options.color = '#78fd9a';
                     }
                     else if(Instance.CC_SelectedItem == 7){
                       almachart_CC.series[target].options.color = '#0058a1';
                     }
                     else if(Instance.CC_SelectedItem == 8){
                       almachart_CC.series[target].options.color = '#a82084';
                     }
                     almachart_CC.series[target].options.zIndex = 2;
                     almachart_CC.series[target].update(almachart_CC.series[target].options);
                     //console.log(almachart_CC.series[target].data);
                   }, 1000);
                 }
               }
           },
           title: {
               text: ''
           },
           plotOptions: {
             series: {
                  enableMouseTracking: false
              }
           },
           legend: {
              enabled : false
           },
           exporting: {
               enabled: false
           },
           xAxis: {
               // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
               categories: ['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h']
           },
           yAxis: {
               title: {
                   text: 'Count'
               }
           },
           credits: {
               enabled: false
           },
           series: [{
               name: 'bbq',
               data: data['line_bbq'],
               lineWidth: '3',
               color: '#2E9BDA'
           }, {
               name: 'boar',
               data: data['line_boar'],
               lineWidth: '3',
               color: '#3BBDA8'
           },  {
               name: 'deer',
               data: data['line_deer'],
                lineWidth: '3',
               color: '#CB3E4B'
           },{
               name: 'fish',
               data: data['line_fish'],
                lineWidth: '3',
               color: '#A072FC'
           },{
               name: 'gnL',
               data: data['line_grasshutL'],
                lineWidth: '3',
               color: '#5b73fc'
           },{
               name: 'gnR',
               data: data['line_grasshutR'],
                lineWidth: '3',
               color: '#78fd9a'
           },{
               name: 'handaxe',
               data: data['line_handaxe'],
                lineWidth: '3',
               color: '#0058a1'
           },{
               name: 'deer',
               data: data['line_think'],
                lineWidth: '3',
               color: '#a82084'
           },]
         });
       }
      )
    },
    ChangeChartPeriod : function(period){
      this.CC_ChartPeriod = period;
      if(period == 0){
        this.CC_substring_01 = 'Today';
        this.CC_substring_02 = 'Daily Average';
      }
      else if(period == 1){
        this.CC_substring_01 = 'This Week';
        this.CC_substring_02 = 'Weekly Average';
      }

      this.drawChart_02();
      this.UpdateChartColor(1);
    },
    ChangeChartStyle : function(pie){
      this.CC_IsPieChart = pie;
      console.log(this.CC_IsPieChart);
      this.drawChart_02();
    },
    UpdateChartColor: function(num){
      this.CC_SelectedItem = num;

      this.ClickChartColume(num);
    },
    ClickChartColume: function(num){
      if(num == 1){
        this.CC_Main_Title = '고기 굽는 구석기인';
        this.CC_Main_Color = 'bg-primary';
        this.CC_Display_Total = this.CC_bbq_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_bbq_Cur;
          this.CC_Display_Avg = this.CC_Today_bbq_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_bbq_Cur;
          this.CC_Display_Avg = this.CC_Week_bbq_Avg;
        }
      }
      else if(num == 2){
        this.CC_Main_Title = '멧돼지에게 쫓기는 구석기인';
        this.CC_Main_Color = 'bg-info';
        this.CC_Display_Total = this.CC_boar_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_boar_Cur;
          this.CC_Display_Avg = this.CC_Today_boar_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_boar_Cur;
          this.CC_Display_Avg = this.CC_Week_boar_Avg;
        }
      }
      else if(num == 3){
        this.CC_Main_Title = '사슴을 사냥하는 구석기인';
        this.CC_Main_Color = 'bg-danger';
        this.CC_Display_Total = this.CC_deer_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_deer_Cur;
          this.CC_Display_Avg = this.CC_Today_deer_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_deer_Cur;
          this.CC_Display_Avg = this.CC_Week_deer_Avg;
        }
      }
      else if(num == 4){
        this.CC_Main_Title = '물고기 사냥하는 구석기인';
        this.CC_Main_Color = 'bg-heliotrope';
        this.CC_Display_Total = this.CC_fish_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_fish_Cur;
          this.CC_Display_Avg = this.CC_Today_fish_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_fish_Cur;
          this.CC_Display_Avg = this.CC_Week_fish_Avg;
        }
      }
      else if(num == 5){
        this.CC_Main_Title = '구석기인의 막집 생활상 1';
        this.CC_Main_Color = 'bg-dodger-blue';
        this.CC_Display_Total = this.CC_ghL_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_ghL_Cur;
          this.CC_Display_Avg = this.CC_Today_ghL_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_ghL_Cur;
          this.CC_Display_Avg = this.CC_Week_ghL_Avg;
        }
      }
      else if(num == 6){
        this.CC_Main_Title = '구석기인의 막집 생활상 2';
        this.CC_Main_Color = 'bg-mint-green-i';
        this.CC_Display_Total = this.CC_ghR_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_ghR_Cur;
          this.CC_Display_Avg = this.CC_Today_ghR_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_ghR_Cur;
          this.CC_Display_Avg = this.CC_Week_ghR_Avg;
        }
      }
      else if(num == 7){
        this.CC_Main_Title = '손도끼 만드는 구석기인';
        this.CC_Main_Color = 'bg-endaveour';
        this.CC_Display_Total = this.CC_handaxe_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_handaxe_Cur;
          this.CC_Display_Avg = this.CC_Today_handaxe_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_handaxe_Cur;
          this.CC_Display_Avg = this.CC_Week_handaxe_Avg;
        }
      }
      else if(num == 8){
        this.CC_Main_Title = '생각하는 구석기인';
        this.CC_Main_Color = 'bg-violet-eggplant';
        this.CC_Display_Total = this.CC_think_Total;
        if(this.CC_ChartPeriod == 0){
          this.CC_Display_Cur = this.CC_Today_think_Cur;
          this.CC_Display_Avg = this.CC_Today_think_Avg;
        }
        else if(this.CC_ChartPeriod == 1){
          this.CC_Display_Cur = this.CC_Week_think_Cur;
          this.CC_Display_Avg = this.CC_Week_think_Avg;
        }
      }
    },
  },

  mounted(){
    this.loadData();
    this.initialize();
  }
});
