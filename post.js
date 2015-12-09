$(document).ready(function(){
     
     moment().format();
     
     $('#startDAte').datepicker();
     
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
     
     var mdArr= [COM01, ECPS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS01, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07];
     
     // medical assitant end --------------------->
        
     function postInfo(){
          event.preventDefault();
          var course= $('#course').val();
          var group= $('#group').val();
          
          function getStartDate() {
               
               var sd= document.getElementById('startDAte').value;
               var add= 0;
               var sub= 0;
               
               for (var x in mdArr){ 
                    
                    var sDate= new Date(sd); 
                    var sNewdate= new Date(sDate);
                    sNewdate.setDate(sNewdate.getDate() + add);
                    var sD = sNewdate.getDate();
                    var sM = sNewdate.getMonth() + 1;
                    var sY= sNewdate.getFullYear();
                    
                    var startDate = sM + '/' + sD + '/' + sY; 
                    console.log("Start Date: "+startDate);
   
                    sNewdate.setDate(sNewdate.getDate() - sub);
                    sD = sNewdate.getDate();
                    sM = sNewdate.getMonth() + 1;
                    sY= sNewdate.getFullYear();
                    
                    startDate = sM + '/' + sD + '/' + sY;
          
                    sd= startDate;
                    add= mdArr[x].days + 1;
                    sub= 1;
               }
          }
          
          getStartDate();
          
          function getEndDate() {
               
               var tt= document.getElementById('startDAte').value;

               for (var x in mdArr){
                    var date = new Date(tt);
                    var newdate = new Date(date);
                    newdate.setDate(newdate.getDate() + mdArr[x].days);
                    var dd = newdate.getDate();
                    var mm = newdate.getMonth() + 1;
                    var y = newdate.getFullYear();
                
                    var endDate = mm + '/' + dd + '/' + y;
                    console.log("end Date: "+endDate);
                     
                    tt= endDate;
               }
          }
          
          getEndDate();
          
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