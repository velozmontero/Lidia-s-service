$(document).ready(function(){
     
     moment().format();
     
     $('#startDAte').datepicker({
         beforeShow: function (input, inst) {
               setTimeout(function () {
                    inst.dpDiv.css({
                         position: "relative",
                         margin: "0 auto",
                         left: 0,
                         right: 0,
                         top: 0,
                    });
               }, 0);
          },
          beforeShowDay: $.datepicker.noWeekends, 
          numberOfMonths: [3,4],
     });
     
     var today = new Date();
     var y = today.getFullYear();
     
     $("#nonWorkingD").multiDatesPicker({
          beforeShow: function (input, inst) {
               setTimeout(function () {
                    inst.dpDiv.css({
                         position: "relative",
                         margin: "0 auto",
                         left: 0,
                         right: 0,
                         top: 0,
                    });
               }, 0);
          },
          beforeShowDay: $.datepicker.noWeekends, 
          numberOfMonths: [3,4],
     });
     
     $('select').material_select();

     $('#action').click(postInfo);
     
     // medical assistant ---------------------->
     
     var COM01= {
          courseCode: "COM01",
          hours: 78,
          days: Math.ceil(78/4)
     };
     
     var ECPS01= {
          courseCode: "ECPS01",
          hours: 20,
          days: Math.ceil(20/4)
     };
     
     var CPR01= {
          courseCode: "CPR01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var PCT02= {
          courseCode: "PCT02",
          hours: 50,
          days: Math.ceil(50/4)
     };
     
     var HAE01= {
          courseCode: "HAE01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var MAT01= {
          courseCode: "MAT01",
          hours: 40,
          days: Math.ceil(40/4)
     };
     
     var MAT02= {
          courseCode: "MAT02",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS01= {
          courseCode: "MAS01",
          hours: 84,
          days: Math.ceil(84/4)
     };
     
     var MAS02= {
          courseCode: "MAS02",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS03= {
          courseCode: "MAS03",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS04= {
          courseCode: "MAS04",
          hours: 40,
          days: Math.ceil(40/4)
     };
     
     var MAS05= {
          courseCode: "MAS05",
          hours: 140,
          days: Math.ceil(140/4)
     };
     
     var MAS06= {
          courseCode: "MAS06",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var MAS07= {
          courseCode: "MAS07",
          hours: 100,
          days: Math.ceil(100/4)
     };
     
     var mdArr= [MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01];
     var dates= [];
     
     // medical assitant end --------------------->
        
     function postInfo(){
          
          dates = $('#nonWorkingD').multiDatesPicker('getDates');
          
          event.preventDefault();
          var course= $('#course').val();
          var group= $('#group').val();
          
          function getStartAndEndDate() {
               
               var c= 1;
               var tt= document.getElementById('startDAte').value;
          
               for (var x in mdArr){
                    
                    var startD= new Date(tt);
                    var sDate= new Date(startD);
                    
                    sDate.setDate(sDate.getDate());
                    var wDay= sDate.getDay();
                    
                    while (
                         (sDate.getDate() == 24 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 25 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 26 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 27 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 28 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 29 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 30 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 31 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 1 && parseInt(sDate.getMonth()+1) == 1) ||
                         (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7) 
                         ) { 
                              sDate.setDate(sDate.getDate() + 1);
                              wDay= sDate.getDay();
                    }
                    
                    while (wDay === 0 || wDay === 6) {
                         sDate.setDate(sDate.getDate() + 1);
                         wDay= sDate.getDay();
                    }
                    
                    var sdd = sDate.getDate();
                    var smm = sDate.getMonth() + 1;
                    var sy = sDate.getFullYear();
                    
                    var startDate= smm + '/' + sdd + '/' + sy;
                    //---------------->
                    
                    var date = new Date(tt);
                    var newdate = new Date(date);
               
                    for (var i= 1; i < mdArr[x].days; i++) {
                         
                         newdate.setDate(newdate.getDate() + 1);
                         var weekDay= newdate.getDay();
                         
                         while (
                              (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                              (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) 
                              ) {
                                   console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                                   newdate.setDate(newdate.getDate() + 1);
                                   weekDay= newdate.getDay();
                         }
                         
                         while (weekDay === 0 || weekDay === 6) {
                             newdate.setDate(newdate.getDate() + 1);
                             weekDay= newdate.getDay();
                         }
               
                         console.log(" date after loop: "+newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                    }
                 
                    var dd = newdate.getDate();
                    console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                    var mm = newdate.getMonth() + 1;
                    var y = newdate.getFullYear();
               
                    var endDate = mm + '/' + dd + '/' + y;
         
                    console.log("course days "+mdArr[x].days);
                    console.log(c+" Start Date for course "+mdArr[x].courseCode+": "+startDate);
                    console.log(c+" End Date for course "+mdArr[x].courseCode+": "+endDate);
                    console.log("week day is: "+ weekDay);
                    
                    newdate.setDate(newdate.getDate() + 1);
                    dd = newdate.getDate();
                    mm = newdate.getMonth() + 1;
                    y = newdate.getFullYear();
                    endDate = mm + '-' + dd + '-' + y;
                    c++; 
                    tt= endDate;
               }
          }
          
          getStartAndEndDate();
          
          /*console.log(course+' '+courseCode+' '+startDate+' '+endDate+' '+hrs+' '+gradDay+' '+lastDayInClass+' '+group);
          $.ajax({
          
               url: 'http://159.203.70.55:5255/'+course+'/'+courseCode+'/'+startDate+'/'+endDate+'/'+hrs+'/'+gradDay+'/'+lastDayInClass+'/'+group,
                
               type:"POST",
                
               success: function(res){
                   $('#studentId').val('');
                   $('#donation').val(''); 
                   console.log(res);
               },
               error: function(request,errortype,errorMessage){
                   console.log("it is not working");
               }
          });*/
     };
});