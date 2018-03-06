
//
//  // Line Area Chart
// $.getJSON('http://ec2-13-125-67-155.ap-northeast-2.compute.amazonaws.com/almadb/day/line/',
//
//   function (data){
//
//     //console.log(data['chart_past']);
//
//     // var Revdata = new Array();
//     // var Overdata = new Array();
//     //
//     // for(i = 0; i < data.length; i++){
//     //   Revdata.push(data['Revenue'][i].key, data['Revenue'][i].value);
//     //   Overdata.push(data['Overhead'][i].key, data['Overhead'][i].value);
//     // }
//
//
//     Highcharts.chart('almachart_02',{
//       chart: {
//           type: 'area',
//           spacingBottom: 30,
//           height: 293,
//           backgroundColor: 'rgba(0,0,0,0)'
//       },
//       title: {
//           text: ''
//       },
//       exporting: {
//           enabled: false
//       },
//       subtitle: {
//           text: '',
//           floating: true,
//           align: 'right',
//           verticalAlign: 'bottom',
//           y: 15
//       },
//       legend: {
//           layout: 'vertical',
//           align: 'left',
//           verticalAlign: 'top',
//           x: 150,
//           y: 100,
//           floating: true,
//           borderWidth: 0,
//           backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//       },
//       xAxis: {
//           // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//           categories: ['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h']
//       },
//       yAxis: {
//           title: {
//               text: ''
//           },
//           labels: {
//               formatter: function () {
//                   return this.value;
//               }
//           }
//       },
//       tooltip: {
//           formatter: function () {
//               return '<b>' + this.series.name + '</b><br/>' +
//                   this.x + ': ' + this.y;
//           }
//       },
//       plotOptions: {
//
//       },
//       tooltip: {
//         enabled: false
//       },
//       credits: {
//           enabled: false
//       },
//       series: [{
//           name: 'Today',
//           data: data['chart_cur'],
//            lineWidth: '1',
//           color: '#CB3E4B',
//               fillColor: {
//               linearGradient: {
//                           x1: 0,
//                           y1: 0,
//                           x2: 0,
//                           y2: 1
//                       },
//                       stops: [
//                           [0, 'rgba(203,62,75,.2)'],
//                           [1, 'rgba(203,62,75,0)']
//                           ]}
//       }, {
//           name: 'Yesterday',
//           data: data['chart_past'],
//            lineWidth: '1',
//           color: '#3BBDA8',
//               fillColor: {
//               linearGradient: {
//                           x1: 0,
//                           y1: 0,
//                           x2: 0,
//                           y2: 1
//                       },
//                       stops: [
//                           [0, 'rgba(59,189,168,.2)'],
//                           [1, 'rgba(59,189,168,0)']
//                           ]}
//       },  {
//           name: 'Daily Average',
//           data: data['chart_avrg'],
//            lineWidth: '1',
//           color: '#A072FC',
//           fillColor: {
//               linearGradient: {
//                           x1: 0,
//                           y1: 0,
//                           x2: 0,
//                           y2: 1
//                       },
//                       stops: [
//                           [0, 'rgba(160,114,252,.2)'],
//                           [1, 'rgba(160,114,252,0)']
//                           ]}
//       }]
//     });
//   }
// )
//
// $.getJSON('http://ec2-13-125-67-155.ap-northeast-2.compute.amazonaws.com/almadb/day/pieline/',
// function(data){
//
//
//   // Pie charts
//   Highcharts.chart('almachart_03',
//   {
//     chart: {
//         backgroundColor : '#242020',
//         plotBackgroundColor: '#242020',
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie',
//         height: 100 + '%',
//         style: {'fill': 'white'}
//     },
//     title: {
//         text: ''
//     },
//      credits: {
//     enabled: false
//   },
//     legend: {
//     align: 'center',
//     verticalAlign: 'bottom',
//     layout: 'vertical',
//     x: 0,
//     y: 0,
//     itemStyle:{'color':'white', 'fontWeight':''}
//   },
//   exporting: {
//     enabled: false
//   },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//              borderColor: '#242420',
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false
//             },
//             showInLegend: true
//             // events: {
//             //       click: function (event) {
//             //           alert(
//             //               this.name + ' clicked\n'
//             //           );
//             //       }
//             //   }
//         }
//     },
//     series: [{
//         name: '터치 수',
//         colorByPoint: true,
//         data: [{
//             name: '고기 굽는 구석기인',
//             y: data['pie_bbq'],
//             color: '#2E9BDA'
//         }, {
//             name: '멧돼지에게 쫓기는 구석기인',
//             y: data['pie_boar'],
//             sliced: true,
//             selected: true,
//              color: '#3BBDA8'
//         }, {
//             name: '사슴을 사냥하는 구석기인',
//             y: data['pie_deer'],
//             color: '#CB3E4B'
//         }, {
//             name: '물고기 사냥하는 구석기인',
//             y: data['pie_fish'],
//             color: '#A072FC'
//         },{
//             name: '구석기인의 막집 생활상 1',
//             y: data['pie_grasshutL'],
//             color: '#5b73fc'
//         },{
//             name: '구석기인의 막집 생활상 2',
//             y: data['pie_grasshutR'],
//             color: '#78fd9a'
//         },{
//             name: '손도끼 만드는 구석기인',
//             y: data['pie_handaxe'],
//             color: '#0058a1'
//         },{
//             name: '생각하는 구석기인',
//             y: data['pie_think'],
//             color: '#a82084'
//         }]
//     }]
//   });
// })

// Type Line Chart
$.getJSON('http://ec2-13-125-67-155.ap-northeast-2.compute.amazonaws.com/almadb/day/pieline/',

 function (data){

   // console.log(data['bbq']);

   // var Revdata = new Array();
   // var Overdata = new Array();
   //
   // for(i = 0; i < data.length; i++){
   //   Revdata.push(data['Revenue'][i].key, data['Revenue'][i].value);
   //   Overdata.push(data['Overhead'][i].key, data['Overhead'][i].value);
   // }


   Highcharts.chart('almachart_04',{
     chart: {
         height: 220,
         backgroundColor: 'rgba(0,0,0,0)'
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
         data: data['line_eer'],
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
