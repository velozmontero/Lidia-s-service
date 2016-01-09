$(document).ready(function(){
     var startDate;
     var addaDay= 0;
     var totalDays = 0;
     var dates= [];
     var arr= [];
     var coursein= "";
     var externship= 0;
     var gradDay;
     
     moment().format();
     
     function addTitle() {
        $('#coursein').html("<b>"+coursein+" "+$('#group').val()+"</b>");
     }
     
     $('#group').change(addTitle);
     
     $('#btnspecialdates').click(function(){
          $('#printinfo').toggleClass("hide");
          $('#action').toggleClass("hide");
          $('#clear').toggleClass("hide");
          $('#btnDone').toggleClass("hide");
          $(this).toggleClass("hide");
          $("#nonWorkingD").toggleClass("hide");
     });
     
     $('#btnDone').click(function(){
          localStorage.clear();
          saveDates();
          $('#printinfo').toggleClass("hide");
          $('#action').toggleClass("hide");
          $('#clear').toggleClass("hide");
          $('#btnspecialdates').toggleClass("hide");
          $(this).toggleClass("hide");
          $("#nonWorkingD").toggleClass("hide");
     });
     
     $('#printinfo').click(function(){
          window.print();
     });
     
     $('#startDAte').datepicker({
         beforeShow: function (input, inst) {
               setTimeout(function () {
                    inst.dpDiv.css({
                         position: "absolute",
                         margin: "0 auto",
                         left: 0,
                         right: 0,
                         top: "91px",
                         "z-index": "1000"
                    });
               }, 0);
          },
          beforeShowDay: $.datepicker.noWeekends, 
          numberOfMonths: [3,4],
     });

     function saveDates() {
          var selectedDates = $('#nonWorkingD').multiDatesPicker('getDates');
          var arrToSve= JSON.stringify(selectedDates);
          if (arrToSve.length > 0) {
               localStorage.setItem('date', arrToSve);
          }  
     }
          
     var test = localStorage.getItem("date");
     var obj = [];
     if (test) {
          obj= JSON.parse(test);
          console.log(obj);
          
          if (obj.length > 0) {
               $("#nonWorkingD").multiDatesPicker({
                    beforeShow: function (input, inst) {
                         setTimeout(function () {
                              inst.dpDiv.css({
                                   position: "absolute",
                                   margin: "0 auto",
                                   left: 0,
                                   right: 0,
                                   top: "91px",
                                   "z-index": "1000"
                              });
                         }, 0);
                    },
                    addDates: obj,
                    beforeShowDay: $.datepicker.noWeekends, 
                    numberOfMonths: [3,4]
               });
          }
          else{
               $("#nonWorkingD").multiDatesPicker({
                    beforeShow: function (input, inst) {
                         setTimeout(function () {
                              inst.dpDiv.css({
                                   position: "absolute",
                                   margin: "0 auto",
                                   left: 0,
                                   right: 0,
                                   top: "91px",
                                   "z-index": "1000"
                              });
                         }, 0);
                    },
                    beforeShowDay: $.datepicker.noWeekends, 
                    numberOfMonths: [3,4]
               });
          }         
     }
     else{
          $("#nonWorkingD").multiDatesPicker({
               beforeShow: function (input, inst) {
                    setTimeout(function () {
                         inst.dpDiv.css({
                              position: "absolute",
                              margin: "0 auto",
                              left: 0,
                              right: 0,
                              top: "91px",
                              "z-index": "1000"
                         });
                    }, 0);
               },
               beforeShowDay: $.datepicker.noWeekends, 
               numberOfMonths: [3,4]
          }); 
     }
     
     $('select').material_select();
     
     $('#action').click(function(){
          if (!$('#startDAte').val() || !$('#course').val()) {
               //do nothing
          }
          else {
               $('#loadingDiv').addClass('hide');
               postInfo();
          }
     });
     
     $('#clear').click(function(){
          $('#response').addClass('hide'); 
          $('#info').html("");
          $('#startDAte').val("");
          $('#loadingDiv').removeClass('hide');
     });
  
     // medical assistant start ---------------------->
     
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
          hours: 40,
          days: Math.ceil(40/4)
     };
     
     var MAS06= {
          courseCode: "MAS06",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var MAS07= {
          courseCode: "MAS07",
          hours: 200,
          days: Math.ceil(200/4)
     };
     
     var mdArr1= [MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01];
     var mdArr2= [CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01];
     var mdArr3= [PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01];
     var mdArr4= [HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02];
     var mdArr5= [MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01];
     var mdArr6= [MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01];
     var mdArr7= [MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02];
     var mdArr8= [MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02];
     var mdArr9= [MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03];
     var mdArr10= [MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04];
     var mdArr11= [MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05];
     var mdArr12= [MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06];
     var mdArr13= [COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07];
     var mdArr14= [ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01 ];
     
     function checkMA() {
          coursein= "Medical Assistant";
          if ($('#startClass').val() == "MAS01") {
               arr= mdArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "CPR01") {
               arr= mdArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT02") {
               arr= mdArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "HAE01") {
               arr= mdArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAT01") {
               arr= mdArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAT02") {
               arr= mdArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS02") {
               arr= mdArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS03") {
               arr= mdArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS04") {
               arr= mdArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS05") {
               arr= mdArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS06") {
               arr= mdArr11;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS07") {
               arr= mdArr12;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "COM01") {
               arr= mdArr13;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "ECPS01") {
               arr= mdArr14;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= mdArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // medical assitant end ---------------------------------------------------------------------------------------------------->
     
      // medical assistant 416 start---------------------->
     
     var GEN110= {
          courseCode: "GEN110",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var GEN120= {
          courseCode: "GEN120",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS101= {
          courseCode: "MAS101",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS102= {
          courseCode: "MAS102",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS103= {
          courseCode: "MAS103",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS104= {
          courseCode: "MAS104",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS105= {
          courseCode: "MAS105",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS106= {
          courseCode: "MAS106",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
      var MAS107= {
          courseCode: "MAS107",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
      var MAS108= {
          courseCode: "MAS108",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS109= {
          courseCode: "MAS109",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS110= {
          courseCode: "MAS110",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var GEN120= {
          courseCode: "GEN120",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var md416Arr1= [GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120];
     var md416Arr2= [GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110];
     var md416Arr3= [MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120];
     var md416Arr4= [MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101];
     var md416Arr5= [MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102];
     var md416Arr6= [MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103];
     var md416Arr7= [MAS105, MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104];
     var md416Arr8= [MAS106, MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105];
     var md416Arr9= [MAS107, MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106];
     var md416Arr10= [MAS108, MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107];
     var md416Arr11= [MAS109, MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108];
     var md416Arr12= [MAS110, GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109];
     var md416Arr13= [GEN120, GEN110, GEN120, MAS101, MAS102, MAS103, MAS104, MAS105, MAS106, MAS107, MAS108, MAS109, MAS110];
     
     function checkMA416() {
          coursein= "Medical Assistant 416";
          if ($('#startClass').val() == "GEN110") {
               arr= md416Arr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "GEN120") {
               arr= md416Arr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS101") {
               arr= md416Arr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS102") {
               arr= md416Arr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS103") {
               arr= md416Arr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS104") {
               arr= md416Arr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS105") {
               arr= md416Arr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS106") {
               arr= md416Arr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS107") {
               arr= md416Arr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS108") {
               arr= md416Arr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS109") {
               arr= md416Arr11;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS110") {
               arr= md416Arr12;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "GEN120") {
               arr= md416Arr13;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= md416Arr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // medical assitant 416 end ---------------------------------------------------------------------------------------------------->
     
     // Pharmacy Technician start ---------------------->
     
     var PHA01= {
          courseCode: "PHA01",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHB02= {
          courseCode: "PHB02",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHC03= {
          courseCode: "PHB02",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHD04= {
          courseCode: "PHD04",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHE05= {
          courseCode: "PHE05",
          hours: 76,
          days: Math.ceil(76/4)
     };
     
     var PHF06= {
          courseCode: "PHF06",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHG07= {
          courseCode: "PHG07",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var CPR01= {
          courseCode: "CPR01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var PHH08= {
          courseCode: "PHH08",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHI09= {
          courseCode: "PHI09",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var phArr1= [PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09];
     var phArr2= [PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01];
     var phArr3= [PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02];
     var phArr4= [PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03];
     var phArr5= [PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04];
     var phArr6= [PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05];
     var phArr7= [PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06];
     var phArr8= [CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07];
     var phArr9= [PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01];
     var phArr10= [PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08];
     
     function checkPHT() {
          coursein= "Pharmacy Technician";
          if ($('#startClass').val() == "PHA01") {
               arr= phArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHB02") {
               arr= phArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHC03") {
               arr= phArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHD04") {
               arr= phArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHE05") {
               arr= phArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHF06") {
               arr= phArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHG07") {
               arr= phArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "CPR01") {
               arr= phArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHH08") {
               arr= phArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHI09") {
               arr= phArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= phArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // Pharmacy Technician end ------------------------------------------------------------------------------------------------->
     
     // Patient Care Technician start------------------->
     
     var PCT16 = {
          courseCode: "PCT16",
          hours: 100,
          days: Math.ceil(100/4)
     };     
     var PCT11 = {
          courseCode: "PCT11",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT12 = {
          courseCode: "PCT12",
          hours: 20,
          days: Math.ceil(20/4)
     };
     var PCT13 = {
          courseCode: "PCT13",
          hours: 20,
          days: Math.ceil(20/4)
     };
     var PCT14 = {
          courseCode: "PCT14",
          hours: 40,
          days: Math.ceil(40/4)
     };
     var PCT15 = {
          courseCode: "PCT15",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var ECP01 = {
          courseCode: "ECP01",
          hours: 20,
          days: Math.ceil(20/4)
     };
     var PCT01 = {
          courseCode: "PCT01",
          hours: 84,
          days: Math.ceil(84/4)
     };
 	 var BLSF01 = {
          courseCode: "BLSF01",
          hours: 4,
          days: Math.ceil(4/4)
     };                          
     var PCT02 = {
          courseCode: "PCT02",
          hours: 50,
          days: Math.ceil(50/4)
     };
     var HAE01 = {
          courseCode: "HAE01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     var PCT03 = {
          courseCode: "PCT03",
          hours: 10,
          days: Math.ceil(10/4)
     };
     var PCT04 = {
          courseCode: "PCT04",
          hours: 18,
          days: Math.ceil(18/4)
     };
     var PCT06 = {
          courseCode: "PCT06",
          hours: 12,
          days: Math.ceil(12/4)
     };
     var PCT05 = {
          courseCode: "PCT06",
          hours: 16,
          days: Math.ceil(16/4)
     };
     var PCT07 = {
          courseCode: "PCT07",
          hours: 12,
          days: Math.ceil(12/4)
     };
     var PCT08 = {
          courseCode: "PCT08",
          hours: 14,
          days: Math.ceil(14/4)
     };
     var PCT09 = {
          courseCode: "PCT09",
          hours: 16,
          days: Math.ceil(16/4)
     };
     
     var pctArr1= [PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09];
     var pctArr2= [PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16];
     var pctArr3= [PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11];
     var pctArr4= [PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12];
     var pctArr5= [PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13];
     var pctArr6= [PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14];
     var pctArr7= [ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15];
     var pctArr8= [PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01];
     var pctArr9= [BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01];
     var pctArr10= [PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01];
     var pctArr11= [HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02];
     var pctArr12= [PCT03, PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01];
     var pctArr13= [PCT04, PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03];
     var pctArr14= [PCT06, PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04];
     var pctArr15= [PCT05, PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06];
     var pctArr16= [PCT07, PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05];
     var pctArr17= [PCT08, PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07];
     var pctArr18= [PCT09, PCT16, PCT11, PCT12, PCT13, PCT14, PCT15, ECP01, PCT01, BLSF01, PCT02, HAE01, PCT03, PCT04, PCT06, PCT05, PCT07, PCT08];
     
     function checkPCT() {
          coursein= "Patient Care Technician";
          if ($('#startClass').val() == "PCT16") {
               arr= pctArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT11") {
               arr= pctArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT12") {
               arr= pctArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT13") {
               arr= pctArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT14") {
               arr= pctArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT15") {
               arr= pctArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "ECP01") {
               arr= pctArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT01") {
               arr= pctArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "BLSF01") {
               arr= pctArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT02") {
               arr= pctArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "HAE01") {
               arr= pctArr11;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT03") {
               arr= pctArr12;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT04") {
               arr= pctArr13;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT06") {
               arr= pctArr14;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT05") {
               arr= pctArr15;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT07") {
               arr= pctArr16;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT08") {
               arr= pctArr17;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT09") {
               arr= pctArr18;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= pctArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // Patient Care Technician end ------------------------------------------------------------------------------------------------->
     
     // Patient Care Technician 516 start------------------->
     
     var PCTGEN110 = {
          courseCode: "GEN110",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCTGEN120 = {
          courseCode: "GEN120",
          hours: 60,
          days: Math.ceil(60/4)
     }; 
     var PCT101 = {
          courseCode: "PCT101",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT102 = {
          courseCode: "PCT102",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT103 = {
          courseCode: "PCT103",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT104 = {
          courseCode: "PCT104",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT105 = {
          courseCode: "PCT105",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT106 = {
          courseCode: "PCT106",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT107 = {
          courseCode: "PCT107",
          hours: 60,
          days: Math.ceil(60/4)
     };
     var PCT108 = {
          courseCode: "PCT108",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var pct516Arr1= [PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103, PCT104, PCT105, PCT106, PCT107, PCT108];
     var pct516Arr2= [PCTGEN120, PCT101, PCT102, PCT103, PCT104, PCT105, PCT106, PCT107, PCT108, PCTGEN110];
     var pct516Arr3= [PCT101, PCT102, PCT103, PCT104, PCT105, PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120];
     var pct516Arr4= [PCT102, PCT103, PCT104, PCT105, PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101];
     var pct516Arr5= [PCT103, PCT104, PCT105, PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102];
     var pct516Arr6= [PCT104, PCT105, PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103];
     var pct516Arr7= [PCT105, PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103, PCT104];
     var pct516Arr8= [PCT106, PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103, PCT104, PCT105];
     var pct516Arr9= [PCT107, PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103, PCT104, PCT105, PCT106];
     var pct516Arr10= [PCT108, PCTGEN110, PCTGEN120, PCT101, PCT102, PCT103, PCT104, PCT105, PCT106, PCT107];
     
     function checkPCT516() {
          coursein= "Patient Care Technician 516";
          if ($('#startClass').val() == "PCTGEN110") {
               arr= pct516Arr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          if ($('#startClass').val() == "PCTGEN120") {
               arr= pct516Arr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT101") {
               arr= pct516Arr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT102") {
               arr= pct516Arr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT103") {
               arr= pct516Arr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT104") {
               arr= pct516Arr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT105") {
               arr= pct516Arr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT106") {
               arr= pct516Arr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT107") {
               arr= pct516Arr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT108") {
               arr= pct516Arr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= pct516Arr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // Patient Care Technician 516 end ------------------------------------------------------------------------------------------------->
     
     // Web Developer Engineer start --------------------------------------------->
     
     var WEB1010 = {
          courseCode: "WEB1010",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var WEB1000 = {
          courseCode: "WEB1000",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var WEB2000 = {
          courseCode: "WEB2000",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var WEB2010 = {
          courseCode: "WEB2010",
          hours: 60,
          days: Math.ceil(60/4)
     };

     var WEB2020 = {
          courseCode: "WEB2020",
          hours: 60,
          days: Math.ceil(60/4)
     };

     var WEB2040 = {
          courseCode: "WEB2040",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var WEB2900 = {
          courseCode: "WEB2900",
          hours: 60,
          days: Math.ceil(60/4)
     };

     var WEB2910 = {
          courseCode: "WEB2910",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var ROR1000 = {
          courseCode: "ROR1000",
          hours: 120,
          days: Math.ceil(120/4)
     };
     
     var WEB3000 = {
          courseCode: "WEB3000",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var CAP2000 = {
          courseCode: "CAP2000",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var wdaArr1= [WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000];
     var wdaArr2= [WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010];
     var wdaArr3= [WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000];
     var wdaArr4= [WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000];
     var wdaArr5= [WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010];
     var wdaArr6= [WEB2040, WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020];
     var wdaArr7= [WEB2900, WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040];
     var wdaArr8= [WEB2910, ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900];
     var wdaArr9= [ROR1000, WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910];
     var wdaArr10= [WEB3000, CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000];
     var wdaArr11= [CAP2000, WEB1010, WEB1000, WEB2000, WEB2010, WEB2020, WEB2040, WEB2900, WEB2910, ROR1000, WEB3000];
     
     var wdaMasterArr1 = [wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11];
     var wdaMasterArr2 = [wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1];
     var wdaMasterArr3 = [wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2];
     var wdaMasterArr4 = [wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3];
     var wdaMasterArr5 = [wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4];
     var wdaMasterArr6 = [wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5];
     var wdaMasterArr7 = [wdaArr7, wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6];
     var wdaMasterArr8 = [wdaArr8, wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7];
     var wdaMasterArr9 = [wdaArr9, wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8];
     var wdaMasterArr10 = [wdaArr10, wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9];
     var wdaMasterArr11 = [wdaArr11, wdaArr1, wdaArr2, wdaArr3, wdaArr4, wdaArr5, wdaArr6, wdaArr7, wdaArr8, wdaArr9, wdaArr10];
     
     function checkWDA() {
          coursein= "Web Developer Engineer";
          if ($('#startClass').val() == "WEB1010") {
               arr= wdaArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB1000") {
               arr= wdaArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2000") {
               arr= wdaArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2010") {
               arr= wdaArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2020") {
               arr= wdaArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2040") {
               arr= wdaArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2900") {
               arr= wdaArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB2910") {
               arr= wdaArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "ROR1000") {
               arr= wdaArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "WEB3000") {
               arr= wdaArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "CAP2000") {
               arr= wdaArr11;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= wdaArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // Web Developer Engineer end ------------------------------------------------------------------------------------------------->
     
     $('#course').change(getActiveCourse);
     function getActiveCourse(){
          if ($('#course').val() == "ma"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in mdArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+mdArr1[t].courseCode+'">'+mdArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "ma416"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in md416Arr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+md416Arr1[t].courseCode+'">'+md416Arr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "pht"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in phArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+phArr1[t].courseCode+'">'+phArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "pct"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in pctArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+pctArr1[t].courseCode+'">'+pctArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "pct516"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in pct516Arr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+pct516Arr1[t].courseCode+'">'+pct516Arr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "wda"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in wdaArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+wdaArr1[t].courseCode+'">'+wdaArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
     }
     
     function postInfo(){
           addaDay= 0;     
           //****************************************************  INITIALIZERS START  ****************************************************
          
          // medical assistant checking start---------------------->
          
          if ($('#course').val() == "ma"){
               externship= 20;
               checkMA();
          }
          
          // medical assistant checking end--------------------------------------------------------------------------------------------------->
          
          // medical assistant 416 checking start---------------------->
          
          if ($('#course').val() == "ma416"){
               externship= 30;
               checkMA416();
          }
          
          // medical assistant 416 checking end--------------------------------------------------------------------------------------------------->
          
          
          // Pharmacy Technician checking start------------------------------->
          
          if ($('#course').val() == "pht"){
               externship= 50;
               checkPHT();
          }
          
         // Pharmacy Technician checking end ------------------------------------------------------------------------------------------------->
          
          
          // Patient Care Technician start -------------------------------->
          
          if ($('#course').val() == "pct"){
               externship= 10;
               checkPCT();
          }
          
          // Patient Care Technician end ------------------------------------------------------------------------------------------------->
          
          // Patient Care Technician 516 start -------------------------------->
          
          if ($('#course').val() == "pct516"){
               externship= 15;
               checkPCT516();
          }
          
          // Patient Care Technician 516 end ------------------------------------------------------------------------------------------------->
          
          
          // Web Developer Engineer start --------------------------------->
          
          if ($('#course').val() == "wda"){
               externship= 0;
               checkWDA();
          }
          
          // Web Developer Engineer end -------------------------------------------------------------------------------------------------->
          
          //****************************************************  INITIALIZERS END  ****************************************************
          
          event.preventDefault();
          dates = $('#nonWorkingD').multiDatesPicker('getDates');
          var tt= document.getElementById('startDAte').value;
          
          var sDatett= new Date(tt);
          var stt= new Date(sDatett);
          
          stt.setDate(stt.getDate());
          var wDaytt= stt.getDay();
          
          if ($('#course').val() == "wda" || $('#course').val() == "pht" || $('#course').val() == "ma416" || $('#course').val() == "pct516"){
               while (
                    (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
                    (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7) ||
                    wDaytt === 0 || wDaytt === 4 || wDaytt === 5 || wDaytt === 6 
                    ) {
                         stt.setDate(stt.getDate() + 1);
                         wDaytt= stt.getDay();
               }
          }
          else{
               while(
                    (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
                    (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7) ||
                    wDaytt === 0 || wDaytt === 6
                    ) { 
                         stt.setDate(stt.getDate() + 1);
                         wDaytt= stt.getDay();
               }
          }
          
          var ttdd = stt.getDate();
          var ttmm = stt.getMonth() + 1;
          var tty = stt.getFullYear();
          
          tt= ttmm + '/' + ttdd + '/' + tty;

          for (var z in dates) {
               
               var nonWDtt= new Date(dates[z]);
               var nWorkingDtt= new Date(nonWDtt);
               
               nWorkingDtt.setDate(nWorkingDtt.getDate());
               
               var nwttdd = nWorkingDtt.getDate();
               var nwttmm = nWorkingDtt.getMonth() + 1;
               var nwtty = nWorkingDtt.getFullYear();
               
               var nonWorkingDaytt= nwttmm + '/' + nwttdd + '/' + nwtty;
               
               if ($('#course').val() == "wda" || $('#course').val() == "pht" || $('#course').val() == "ma416" || $('#course').val() == "pct516"){
                    while(nonWorkingDaytt == tt ||
                         (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
                         (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7) ||
                         wDaytt === 0 || wDaytt === 4 || wDaytt === 5 || wDaytt === 6 
                         ) {
                              stt.setDate( stt.getDate() + 1);
                              wDaytt=  stt.getDay();
                              ttdd = stt.getDate();
                              ttmm = stt.getMonth() + 1;
                              tty = stt.getFullYear();
                              
                              tt= ttmm + '/' + ttdd + '/' + tty;
                         }
                    }
               else{
                    while(nonWorkingDaytt == tt || wDaytt === 0 || wDaytt === 6 ||
                         (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
                         (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
                         (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7)   
                         ) {
                         stt.setDate( stt.getDate() + 1);
                         wDaytt=  stt.getDay();
                         ttdd = stt.getDate();
                         ttmm = stt.getMonth() + 1;
                         tty = stt.getFullYear();
                         
                         tt= ttmm + '/' + ttdd + '/' + tty;
                    }
               }
          }
          
          $('#response').removeClass('hide');
          
          var midPoint;
          var lastDayInClass;
          var course= $('#course').val();
          var group= $('#group').val();
          
          function getStartAndEndDate() {
               
               var c= 1;
    
               for (var x in arr){
                    
                    var hrs= arr[x].hours;
                    var courseCode= arr[x].courseCode;
                    var startD= new Date(tt);
                    var sDate= new Date(startD);
                    
                    sDate.setDate(sDate.getDate());
                    var wDay= sDate.getDay();
                    
                    if ($('#course').val() == "wda" || $('#course').val() == "pht" || $('#course').val() == "ma416" || $('#course').val() == "pct516"){
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
                              (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7) ||
                              wDay === 0 || wDay === 4 || wDay === 5 || wDay === 6 
                              ) {

                                   sDate.setDate(sDate.getDate() + 1);
                                   wDay= sDate.getDay();
                         }
                    }
                    else {
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
                              (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7) ||
                              wDay === 0 || wDay === 6
                              ) { 
                                   sDate.setDate(sDate.getDate() + 1);
                                   wDay= sDate.getDay();
                         }
                    }
                    var sdd = sDate.getDate();
                    var smm = sDate.getMonth() + 1;
                    var sy = sDate.getFullYear();
                    
                    startDate= smm + '/' + sdd + '/' + sy;
                    console.log("start date after checking holidays, thursdays, fridays and weekends: "+startDate);
                    tt= smm + '/' + sdd + '/' + sy;
                    console.log("tt date: "+tt);
                    
                    for (var o in dates) {
                         
                         var nonWD= new Date(dates[o]);
                         var nWorkingD= new Date(nonWD);
                         
                         nWorkingD.setDate(nWorkingD.getDate());
                         
                         var nwdd = nWorkingD.getDate();
                         var nwmm = nWorkingD.getMonth() + 1;
                         var nwy = nWorkingD.getFullYear();
                         
                         var nonWorkingDay= nwmm + '/' + nwdd + '/' + nwy;
                         
                         if ($('#course').val() == "wda" || $('#course').val() == "pht" || $('#course').val() == "ma416" || $('#course').val() == "pct516"){
                              while(nonWorkingDay == startDate ||
                                    wDay === 0 || wDay === 4 || wDay === 5 || wDay === 6 ||
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
                                        sdd = sDate.getDate();
                                        smm = sDate.getMonth() + 1;
                                        sy = sDate.getFullYear();
                                        startDate= smm + '/' + sdd + '/' + sy;
                                        console.log("start date after checking nonworking days: "+startDate);
                                        tt= smm + '/' + sdd + '/' + sy;
                                        console.log("tt date: "+tt);
                              }
                         }
                         else {
                              while(nonWorkingDay == startDate || wDay === 0 || wDay === 6 ||
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
                                   sdd = sDate.getDate();
                                   smm = sDate.getMonth() + 1;
                                   sy = sDate.getFullYear();
                                   startDate= smm + '/' + sdd + '/' + sy;
                                   console.log("start date after checking nonworking days: "+startDate);
                                   tt= smm + '/' + sdd + '/' + sy;
                                   console.log("tt date: "+tt);
                              }
                         }
                    }
                    console.log("start date after loop: "+startDate);
                    
                    //---------------->
                    console.log("tt date after loop: "+tt);
                    var date = new Date(tt);
                    var newdate = new Date(date);
               
                    for (var i= 1; i < arr[x].days; i++) {
                         
                         newdate.setDate(newdate.getDate() + 1);
                         var weekDay= newdate.getDay();
                         
                         while(
                              (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                              (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) ||
                              weekDay === 0 || weekDay === 6
                              ) {
                                   
                                   newdate.setDate(newdate.getDate() + 1);
                                   weekDay= newdate.getDay();
                         }
                         
                         var dd = newdate.getDate();
                         
                         var mm = newdate.getMonth() + 1;
                         var y = newdate.getFullYear();
                    
                         var endDate = mm + '/' + dd + '/' + y;
                         
                         for (var c in dates) {
                         
                              var nonWDE= new Date(dates[c]);
                              var nWorkingDE= new Date(nonWDE);
                              
                              nWorkingDE.setDate(nWorkingDE.getDate());
                              
                              var nwddE = nWorkingDE.getDate();
                              var nwmmE = nWorkingDE.getMonth() + 1;
                              var nwyE = nWorkingDE.getFullYear();
                              
                              var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                              
                              while(nonWorkingDayE == endDate || wDay === 0 || wDay === 6 ||
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
                                   newdate.setDate(newdate.getDate() + 1);
                                   wDay= newdate.getDay();
                                   dd = newdate.getDate();
                                   mm = newdate.getMonth() + 1;
                                   y = newdate.getFullYear();
                              
                                   endDate = mm + '/' + dd + '/' + y;
                              }
                         }
                    }
                 
                    dd = newdate.getDate();
                    mm = newdate.getMonth() + 1;
                    y = newdate.getFullYear();
               
                    endDate = mm + '/' + dd + '/' + y;
                    
                    lastDayInClass= startDate;
                    midPoint= startDate;
                    
                    // where the magic happens --------------------------------------------------------------------->
                    
                    if ($('#course').val() == "wda" || $('#course').val() == "pht" || $('#course').val() == "ma416" || $('#course').val() == "pct516"){
                         getStartDay();
                    }
                    
                    //---------------------------------------------------------------------------------------------->
                    var midDay= new Date(midPoint);
                    var midD= new Date(midDay);
                    var halfDays= Math.floor((addaDay+totalDays+externship)/2);
                    
                    for (var i= 1; i < halfDays; i++) {
                         midD.setDate(midD.getDate() + 1);
                         var middOFDW= midD.getDay();
                         
                         while (
                              (midD.getDate() == 24 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 25 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 26 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 27 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 28 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 29 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 30 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() == 31 && parseInt(midD.getMonth()+1) == 12) ||
                              (midD.getDate() ==  1 && parseInt(midD.getMonth()+1) ==  1) ||
                              (midD.getDate() ==  4 && parseInt(midD.getMonth()+1) ==  7) ||
                              middOFDW === 0 || middOFDW === 6
                              ) {
                                   midD.setDate(midD.getDate() + 1);
                                   middOFDW= midD.getDay();
                         }
                         
                         var middd = midD.getDate();
                         var midmm = midD.getMonth() + 1;
                         var midy = midD.getFullYear();
                         
                         midPoint= midmm + '/' + middd + '/' + midy;
                         
                         for (var q in dates) {
                              
                              var midDin= new Date(dates[q]);
                              var midDC= new Date(midDin);
                              
                              midDC.setDate(midDC.getDate());
                              
                              var midDCdd = midDC.getDate();
                              var midDCmm = midDC.getMonth() + 1;
                              var midDCy = midDC.getFullYear();
                              
                              var midDCInClass= midDCmm + '/' + midDCdd + '/' + midDCy;
                              
                              while(midDCInClass == midPoint || middOFDW === 0 || middOFDW === 6 ||
                                   (midD.getDate() == 24 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 25 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 26 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 27 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 28 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 29 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 30 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() == 31 && parseInt(midD.getMonth()+1) == 12) ||
                                   (midD.getDate() ==  1 && parseInt(midD.getMonth()+1) ==  1) ||
                                   (midD.getDate() ==  4 && parseInt(midD.getMonth()+1) ==  7)  
                                   ) {
                                   midD.setDate(midD.getDate() + 1);
                                   middd = midD.getDate();
                                   midmm = midD.getMonth() + 1;
                                   midy = midD.getFullYear();
                                   
                                   midPoint= midmm + '/' + middd + '/' + midy;
                                   middOFDW= midD.getDay();
                              }
                         }
                    }
                    
                    //---------------------------------------------------------------------------------------------->
                    
                    //---------------------------------------------------------------------------------------------->
                    
                    var lastDay= new Date(lastDayInClass);
                    var lastD= new Date(lastDay);
                    
                    for (var i= 1; i < (totalDays+addaDay); i++) {
                         lastD.setDate(lastD.getDate() + 1);
                         var dOFDW= lastD.getDay();    
                         
                         while (
                              (lastD.getDate() == 24 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 25 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 26 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 27 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 28 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 29 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 30 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 31 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() ==  1 && parseInt(lastD.getMonth()+1) ==  1) ||
                              (lastD.getDate() ==  4 && parseInt(lastD.getMonth()+1) ==  7) ||
                              dOFDW === 0 || dOFDW === 6
                              ) {
                                   lastD.setDate(lastD.getDate() + 1);
                                   dOFDW= lastD.getDay();
                         }
                         
                         var ldd = lastD.getDate();
                         var lmm = lastD.getMonth() + 1;
                         var ly = lastD.getFullYear();
                         
                         lastDayInClass= lmm + '/' + ldd + '/' + ly;
                         
                         for (var l in dates) {
                              
                              var lastDin= new Date(dates[l]);
                              var lDC= new Date(lastDin);
                              
                              lDC.setDate(lDC.getDate());
                              
                              var lDCdd = lDC.getDate();
                              var lDCmm = lDC.getMonth() + 1;
                              var lDCy = lDC.getFullYear();
                              
                              var lDCInClass= lDCmm + '/' + lDCdd + '/' + lDCy;
                              
                              while(lDCInClass == lastDayInClass || dOFDW === 0 || dOFDW === 6 ||
                                   (lastD.getDate() == 24 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 25 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 26 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 27 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 28 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 29 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 30 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 31 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() ==  1 && parseInt(lastD.getMonth()+1) ==  1) ||
                                   (lastD.getDate() ==  4 && parseInt(lastD.getMonth()+1) ==  7) 
                                   ) {
                                   lastD.setDate(lastD.getDate() + 1);
                                   ldd = lastD.getDate();
                                   lmm = lastD.getMonth() + 1;
                                   ly = lastD.getFullYear();
                                   
                                   lastDayInClass= lmm + '/' + ldd + '/' + ly;
                                   dOFDW= lastD.getDay();
                                   console.log("last day in class after filter: "+lastDayInClass);
                              }
                         }     
                    }
                            
                    
                    
                    //---------------------------------------------------------------------------------------------->
                    
                    var graduationDay= new Date(lastDayInClass);
                    var gDate= new Date(graduationDay);
                    
                    for (var i= 0; i < externship; i++) {
                         gDate.setDate(gDate.getDate() + 1);
                         var dayOFDW= gDate.getDay();
                         
                         while(
                              (gDate.getDate() == 24 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 25 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 26 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 27 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 28 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 29 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 30 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 31 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() ==  1 && parseInt(gDate.getMonth()+1) ==  1) ||
                              (gDate.getDate() ==  4 && parseInt(gDate.getMonth()+1) ==  7) ||
                              dayOFDW === 0 || dayOFDW === 6
                              ) {
                                   gDate.setDate(gDate.getDate() + 1);
                                   dayOFDW= gDate.getDay();
                         }
                         
                         var gdd = gDate.getDate();
                         var gmm = gDate.getMonth() + 1;
                         var gy = gDate.getFullYear();
                         
                         gradDay= gmm + '/' + gdd + '/' + gy;
                         
                         for (var u in dates) {
                              
                              var gradD= new Date(dates[u]);
                              var graduationD= new Date(gradD);
                              
                              graduationD.setDate(graduationD.getDate());
                              
                              var gradd = graduationD.getDate();
                              var gramm = graduationD.getMonth() + 1;
                              var gray = graduationD.getFullYear();
                              
                              var graduDay= gramm + '/' + gradd + '/' + gray;
                              
                              while(graduDay == gradDay || dayOFDW === 0 || dayOFDW === 6 ||
                                   (gDate.getDate() == 24 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 25 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 26 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 27 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 28 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 29 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 30 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 31 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() ==  1 && parseInt(gDate.getMonth()+1) ==  1) ||
                                   (gDate.getDate() ==  4 && parseInt(gDate.getMonth()+1) ==  7)  
                                   ) {
                                   gDate.setDate(gDate.getDate() + 1);
                                   gdd = gDate.getDate();
                                   gmm = gDate.getMonth() + 1;
                                   gy = gDate.getFullYear();
                                   
                                   gradDay= gmm + '/' + gdd + '/' + gy;
                                   dayOFDW= gDate.getDay();
                              }
                         }
                    }
                    
                    if ($('#course').val() == "wda"){
                        gradDay= lastDayInClass; 
                    }
                    
                    //-------------------------------------------------------------------------------------------------->
                    console.log(course+' '+courseCode+' '+startDate+' '+endDate+' '+hrs+' '+gradDay+' '+midPoint+' '+lastDayInClass+' '+group);
                    
                    if (!$('#group').val()) {
                         $('#group').val("Group 1");
                    }
                    else{addTitle();}
                   
                    $('#info').append(
                        '<tr>'+'<td>'+courseCode+'</td>'+
                        '<td>'+startDate+'</td>'+
                        '<td>'+endDate+'</td>'+
                        '<td>'+hrs+'</td>'+
                        '<td>'+midPoint+'</td>'+
                        '<td>'+lastDayInClass+'</td>'+
                        '<td>'+gradDay+'</td>'+
                        '</tr>'
                    );
                   
                    /*$.ajax({
          
                         url: 'http://159.203.70.55:5255/'+course+'/'+courseCode+'/'+startDate+'/'+endDate+'/'+hrs+'/'+gradDay+'/'+lastDayInClass+'/'+group,
                          
                         type:"POST",
                          
                         success: function(res){
                             console.log(res);
                         },
                         error: function(request,errortype,errorMessage){
                             console.log("it is not working");
                         }
                    });*/
                    
                    newdate.setDate(newdate.getDate() + 1);
                    
                    weekDay= newdate.getDay();
                         
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
                         (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) ||
                         weekDay === 0 || weekDay === 6
                         ) {
                              newdate.setDate(newdate.getDate() + 1);
                              weekDay= newdate.getDay();
                    }
                    
                    var dd = newdate.getDate();
                    var mm = newdate.getMonth() + 1;
                    var y = newdate.getFullYear();
               
                    var endDate = mm + '/' + dd + '/' + y;
                    
                    for (var c in dates) {
                    
                         var nonWDE= new Date(dates[c]);
                         var nWorkingDE= new Date(nonWDE);
                         
                         nWorkingDE.setDate(nWorkingDE.getDate());
                         
                         var nwddE = nWorkingDE.getDate();
                         var nwmmE = nWorkingDE.getMonth() + 1;
                         var nwyE = nWorkingDE.getFullYear();
                         
                         var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                         
                         while(nonWorkingDayE == endDate || wDay === 0 || wDay === 6 ||
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
                              newdate.setDate(newdate.getDate() + 1);
                              wDay= newdate.getDay();
                              dd = newdate.getDate();
                              mm = newdate.getMonth() + 1;
                              y = newdate.getFullYear();
                         
                              endDate = mm + '/' + dd + '/' + y;
                         }
                    }
                    
                    c++; 
                    tt= endDate;
                    addaDay= 0;
               }
          }
         
          getStartAndEndDate();
          $('#startDAte').val(tt);
          totalDays = 0;
          externship= 0;
          addaDay= 0; 
     };
     
     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          
     function getStartDay(){     
          var LDCttQ;
          var LDCttS= startDate;
          var LDCDatett= new Date(LDCttS);
          var LDCtt= new Date(LDCDatett);
      
          LDCtt.setDate(LDCtt.getDate());
          var LDCwDaytt= LDCtt.getDay();
          
          var LDCttdd = LDCtt.getDate();
          var LDCttmm = LDCtt.getMonth() + 1;
          var LDCtty = LDCtt.getFullYear();
          
          var LDCttD= LDCttmm + '/' + LDCttdd + '/' + LDCtty;
          
          var testDay= LDCttD;
          console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy "+LDCttD);
          
          LDCtt.setDate(LDCtt.getDate() + 1);
          LDCwDaytt= LDCtt.getDay();
          LDCttdd = LDCtt.getDate();
          LDCttmm = LDCtt.getMonth() + 1;
          LDCtty = LDCtt.getFullYear();
          
          LDCttD= LDCttmm + '/' + LDCttdd + '/' + LDCtty;
          
          for (var n=0; n < arr.length-1; n++){
               console.log("pppppppppppppppppppppppppppppppppp "+arr[n].courseCode);
               console.log("pppppppppppppppppppppppppppppppppp "+arr[n].days);
               for (var i= 1; i < (arr[n].days); i++) {
                    LDCttQ= LDCttD;
                    var LDCDatettQ= new Date(LDCttQ);
                    var LDCttQ= new Date(LDCDatettQ);
                    
                    var LDCttddQ = LDCttQ.getDate();
                    var LDCttmmQ = LDCttQ.getMonth() + 1;
                    var LDCttyQ = LDCttQ.getFullYear();
                    
                    var LDCttQCHECK= LDCttmmQ + '/' + LDCttddQ + '/' + LDCttyQ;
                    //console.log("XXXXXXXXXXXXXXXXX CHECK "+LDCttQCHECK);
                    
                    LDCttQ.setDate(LDCttQ.getDate() + 1);
                    var LDCwDaytt= LDCttQ.getDay();
                    LDCttddQ = LDCttQ.getDate();
                    LDCttmmQ = LDCttQ.getMonth() + 1;
                    LDCttyQ = LDCttQ.getFullYear();
                    
                    var LDCttQFG= LDCttmmQ + '/' + LDCttddQ + '/' + LDCttyQ;
                    
                    var LDCDatettQZZ= new Date(LDCttQFG);
                    var LDCttQZZ= new Date(LDCDatettQZZ);
                    LDCttQZZ.setDate(LDCttQZZ.getDate());
                    var LDCwDayttZZ= LDCttQZZ.getDay();
                    
                    while(nonWorkingDayE == LDCttQFG || 
                         (LDCttQZZ.getDate() == 24 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 25 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 26 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 27 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 28 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 29 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 30 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 31 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                         (LDCttQZZ.getDate() == 1 && parseInt(LDCttQZZ.getMonth()+1) == 1) ||
                         (LDCttQZZ.getDate() == 4 && parseInt(LDCttQZZ.getMonth()+1) == 7) ||
                         LDCwDayttZZ === 0 || LDCwDayttZZ === 6 
                         ){
                              LDCttQZZ.setDate(LDCttQZZ.getDate() + 1);
                              LDCwDayttZZ= LDCttQZZ.getDay();
                          
                              LDCttddQ = LDCttQZZ.getDate();
                              LDCttmmQ = LDCttQZZ.getMonth() + 1;
                              LDCttyQ = LDCttQZZ.getFullYear();
                                   
                              LDCttQFG= LDCttmmQ + '/' + LDCttddQ + '/' + LDCttyQ;
                         }
                         LDCttQ=LDCttQFG;
                         
                    for (var c in dates) {
                         var nonWDE= new Date(dates[c]);
                         var nWorkingDE= new Date(nonWDE);
                         
                         nWorkingDE.setDate(nWorkingDE.getDate());
                         
                         var nwddE = nWorkingDE.getDate();
                         var nwmmE = nWorkingDE.getMonth() + 1;
                         var nwyE = nWorkingDE.getFullYear();
                         
                         var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                         
                         while(nonWorkingDayE == LDCttQFG || 
                              (LDCttQZZ.getDate() == 24 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 25 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 26 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 27 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 28 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 29 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 30 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 31 && parseInt(LDCttQZZ.getMonth()+1) == 12) ||
                              (LDCttQZZ.getDate() == 1 && parseInt(LDCttQZZ.getMonth()+1) == 1) ||
                              (LDCttQZZ.getDate() == 4 && parseInt(LDCttQZZ.getMonth()+1) == 7) ||
                              LDCwDayttZZ === 0 || LDCwDayttZZ === 6 
                              ){
                                   LDCttQZZ.setDate(LDCttQZZ.getDate() + 1);
                                   LDCwDayttZZ= LDCttQZZ.getDay();
                               
                                   LDCttddQ = LDCttQZZ.getDate();
                                   LDCttmmQ = LDCttQZZ.getMonth() + 1;
                                   LDCttyQ = LDCttQZZ.getFullYear();
                                        
                                   LDCttQFG= LDCttmmQ + '/' + LDCttddQ + '/' + LDCttyQ;
                              }
                              
                              LDCttQ=LDCttQFG;
                    }
                    LDCttD= LDCttQ;
                    //console.log("DAY IN LOOP: "+LDCttQ+"DAY OF THE WEEK "+ LDCwDaytt);
               }
               var LDCttQR= LDCttD;
               var LDCDatettQR= new Date(LDCttQR);
               var LDCttQR= new Date(LDCDatettQR);
               
               var LDCwDayttR= LDCttQR.getDay();
               while(
                    (LDCttQR.getDate() == 24 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 25 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 26 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 27 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 28 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 29 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 30 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 31 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                    (LDCttQR.getDate() == 1 && parseInt(LDCttQR.getMonth()+1) == 1) ||
                    (LDCttQR.getDate() == 4 && parseInt(LDCttQR.getMonth()+1) == 7) ||
                    LDCwDayttR === 0 || LDCwDayttR === 4 || LDCwDayttR === 5 || LDCwDayttR === 6 
                    ) {
                         if (LDCwDayttR === 4 || LDCwDayttR === 5) {
                              addaDay+=1;   
                         }
                         LDCttQR.setDate(LDCttQR.getDate() + 1);
                         LDCwDayttR= LDCttQR.getDay();
                     }
                     
               var LDCttddQR = LDCttQR.getDate();
               var LDCttmmQR = LDCttQR.getMonth() + 1;
               var LDCttyQR = LDCttQR.getFullYear();
               
               var LDCttQRA= LDCttmmQR + '/' + LDCttddQR + '/' + LDCttyQR;
               
               for (var c in dates) {
          
                    var nonWDE= new Date(dates[c]);
                    var nWorkingDE= new Date(nonWDE);
                    
                    nWorkingDE.setDate(nWorkingDE.getDate());
                    
                    var nwddE = nWorkingDE.getDate();
                    var nwmmE = nWorkingDE.getMonth() + 1;
                    var nwyE = nWorkingDE.getFullYear();
                    
                    var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                    
                    while(nonWorkingDayE == LDCttQRA || 
                         (LDCttQR.getDate() == 24 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 25 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 26 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 27 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 28 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 29 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 30 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 31 && parseInt(LDCttQR.getMonth()+1) == 12) ||
                         (LDCttQR.getDate() == 1 && parseInt(LDCttQR.getMonth()+1) == 1) ||
                         (LDCttQR.getDate() == 4 && parseInt(LDCttQR.getMonth()+1) == 7) ||
                         LDCwDayttR === 0 || LDCwDayttR === 4 || LDCwDayttR === 5 || LDCwDayttR === 6 
                         ){
                              if (LDCwDayttR === 4 || LDCwDayttR === 5) {
                                   addaDay+=1;   
                              }
                              LDCttQR.setDate(LDCttQR.getDate() + 1);
                              LDCwDayttR= LDCttQR.getDay();
                          
                              LDCttddQR = LDCttQR.getDate();
                              LDCttmmQR = LDCttQR.getMonth() + 1;
                              LDCttyQR = LDCttQR.getFullYear();
                              LDCttQRA= LDCttmmQR + '/' + LDCttddQR + '/' + LDCttyQR; 
                         }
               }
               
               console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX THE MAN "+LDCttQRA);
               
               LDCttQR.setDate(LDCttQR.getDate() + 1);
               LDCttddQR = LDCttQR.getDate();
               LDCttmmQR = LDCttQR.getMonth() + 1;
               LDCttyQR = LDCttQR.getFullYear();
               LDCttQRA= LDCttmmQR + '/' + LDCttddQR + '/' + LDCttyQR; 
               LDCttD= LDCttQRA;
     
               //console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX "+LDCttD);
               console.log("days to add: "+addaDay);
               
          }     
     } 
});

        