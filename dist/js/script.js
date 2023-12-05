function getChartData(r){$("#loadingMessage").html(""),$.ajax({url:"data.json",success:function(a){var e,t;$(".StrafickGraf").html(""),"m"==r&&((e=[]).push(a.FirstGrafdata),(t=[]).push(a.labelsmonth),renderchart(e,t)),"y"==r&&((e=[]).push(a.SecondGrafdata),(t=[]).push(a.labelsyear),renderchart(e,t))},error:function(a){$(".StrafickGraf").html("Error  "+r)}})}function renderchart(a,e){getChartData();var t=document.getElementById("myChart").getContext("2d");new Chart(t,{type:"line",data:{labels:e,datasets:[{label:"New Visitor",pointRadius:0,fill:!0,backgroundColor:"rgba(76, 132, 255, 0.9)",borderColor:"rgba(76, 132, 255, 0.9)",data:a[1],cubicInterpolationMode:"monotone"},{label:"Return Visitor",pointRadius:0,fill:!0,backgroundColor:"rgba(0,35,148,0.9)",borderColor:"rgba(0,35,148,0.9)",data:a[0],cubicInterpolationMode:"monotone"}]},options:{scales:{x:{grid:{display:!1}},y:{ticks:{callback:function(a,e,t){if(a%1==0)return 0<a?a+"M":a}},grid:{display:!1}}},plugins:{legend:{position:"top",align:"end",labels:{usePointStyle:!0,padding:50}}}}})}$("#Butm").click(function(){getChartData("m")}),$("#Buty").click(function(){getChartData("y")});var area=document.getElementById("StrafickG01").getContext("2d"),urChart=new Chart(area,{type:"doughnut",data:{labels:[30],datasets:[{data:[100],backgroundColor:["rgb(155,155,155)","rgb(94,101,187)","rgb(2,9,91)"],borderWidth:1}]},options:{plugins:{legend:{display:!1}}}}),area=document.getElementById("Graf01").getContext("2d"),urChart=new Chart(area,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],datasets:[{backgroundColor:"rgba(76,255,112,0.9)",borderColor:"rgba(127,255,76,0.9)",data:[4,5,0,2,1,5,3,6,1,11,6,9,7,8,10]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Graf02").getContext("2d"),urChart=new Chart(area,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],datasets:[{backgroundColor:"rgba(255,76,76,0.9)",borderColor:"rgba(255,76,76,0.9)",data:[6,4,8,7,0,3,4,10,8,7,8,7,5]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Graf03").getContext("2d"),urChart=new Chart(area,{type:"bar",data:{labels:["0%","100%"],datasets:[{label:"Today",pointRadius:0,fill:!0,backgroundColor:"rgba(17,211,79,0.9)",borderColor:"rgba(17,211,79,0.9)",data:[67,0],barThickness:6,padding:60},{barThickness:6,label:"Yesterday",pointRadius:0,fill:!0,backgroundColor:"rgba(6,224,253,0.9)",borderColor:"rgba(6,224,253,0.9)",data:[0,78]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},indexAxis:"y",plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel01").getContext("2d"),urChart=new Chart(area,{type:"bar",data:{labels:[1,2,3,4,5,6,7,8,9],datasets:[{fill:!0,backgroundColor:"rgba(39,210,18,0.9)",borderColor:"rgba(39,210,18,0.9)",data:[2,1,3,4,5,3,4,2,4]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel02").getContext("2d"),urChart=new Chart(area,{type:"bar",data:{labels:[1,2,3,4,5,6,7,8,9,10],datasets:[{fill:!0,backgroundColor:"rgba(225,31,31,0.9)",borderColor:"rgba(225,31,31,0.9)",data:[10,8,2,5,6,10,14,17,16,20]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel03").getContext("2d"),urChart=new Chart(area,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9],datasets:[{borderColor:"rgba(232,145,32,0.9)",data:[0,4,3,8,7,6,8,4,3]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel04").getContext("2d"),urChart=new Chart(area,{type:"line",data:{labels:[1,2,3,4,5,6,7,8],datasets:[{pointRadius:0,fill:!0,backgroundColor:"rgba(17,211,79,0.9)",borderColor:"rgba(17,211,79,0.9)",data:[0,4,2,6,6.5,10,0]},{pointRadius:0,fill:!0,backgroundColor:"rgba(6,224,253,0.9)",borderColor:"rgba(6,224,253,0.9)",data:[0,4,3,12,6.5,2,8,0]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel05").getContext("2d"),urChart=new Chart(area,{type:"pie",data:{labels:[1,2,3],datasets:[{fill:!0,data:[30,30,40],backgroundColor:["rgb(155,155,155)","rgb(94,101,187)","rgb(2,9,91)"],borderWidth:1}]},options:{plugins:{legend:{display:!1}}}}),area=document.getElementById("Sel06").getContext("2d"),urChart=new Chart(area,{type:"bar",data:{labels:[1,2,3,4,5,6,7,8,9],datasets:[{fill:!0,backgroundColor:"rgba(76, 132, 255, 0.9)",borderColor:"rgba(76, 132, 255, 0.9)",data:[4,2,6,7,8,5,6,4,7]}]},options:{scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}},plugins:{legend:{display:!1}}}});