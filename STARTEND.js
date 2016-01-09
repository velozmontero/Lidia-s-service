
function getStartDay(){     
     var LDCtt= document.getElementById('startDAte').value;
     var addaDay=0;          
     var LDCsDatett= new Date(LDCtt);
     
     var LDCstt= new Date(LDCsDatett);

     LDCstt.setDate(LDCstt.getDate());
     var LDCwDaytt= LDCstt.getDay();
     for (var n in arr){
          for (var i= 1; i < totalDays+1; i++) {
               while (
                   (LDCstt.getDate() == 24 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 25 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 26 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 27 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 28 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 29 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 30 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 31 && parseInt(LDCstt.getMonth()+1) == 12) ||
                   (LDCstt.getDate() == 1 && parseInt(LDCstt.getMonth()+1) == 1) ||
                   (LDCstt.getDate() == 4 && parseInt(LDCstt.getMonth()+1) == 7) ||
                   LDCwDaytt === 0 || LDCwDaytt === 4 || LDCwDaytt === 5 || LDCwDaytt === 6 
                   ) {
                        if (LDCwDaytt === 4 || LDCwDaytt === 5) {
                             addaDay+=1;   
                        }
                        LDCstt.setDate(LDCstt.getDate() + 1);
                        LDCwDaytt= LDCstt.getDay();
               }
               
               var LDCttdd = LDCstt.getDate();
               var LDCttmm = LDCstt.getMonth() + 1;
               var LDCtty = LDCstt.getFullYear();
               
               LDCtt= LDCttmm + '/' + LDCttdd + '/' + LDCtty;
          }
          console.log(LDCtt);
     }     
}         

