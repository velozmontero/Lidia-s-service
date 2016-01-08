var LDCtt= document.getElementById('startDAte').value;
          
var LDCsDatett= new Date(LDCtt);
var LDCstt= new Date(LDCsDatett);

LDCstt.setDate(LDCstt.getDate());
var LDCwDaytt= LDCstt.getDay();

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

for (var N in dates) {
               
    var LDCnonWDtt= new Date(dates[N]);
    var LDCnWorkingDtt= new Date(LDCnonWDtt);
    
    LDCnWorkingDtt.setDate(LDCnWorkingDtt.getDate());
    
    var LDCnwttdd = LDCnWorkingDtt.getDate();
    var LDCnwttmm = LDCnWorkingDtt.getMonth() + 1;
    var LDCnwtty = LDCnWorkingDtt.getFullYear();
    
    var LDCnonWorkingDaytt= LDCnwttmm + '/' + LDCnwttdd + '/' + LDCnwtty;
    
    while(LDCnonWorkingDaytt == LDCtt ||
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
            LDCstt.setDate( LDCstt.getDate() + 1);
            LDCwDaytt=  LDCstt.getDay();
            LDCttdd = LDCstt.getDate();
            LDCttmm = LDCstt.getMonth() + 1;
            LDCtty = LDCstt.getFullYear();
             
            LDCtt= LDCttmm + '/' + LDCttdd + '/' + LDCtty;
        }
    
}
function LDCgetStartAndEndDate() {         
                                  
        var c= 1;

        for (var x in arr){
             
            var hrs= arr[x].hours;
            var courseCode= arr[x].courseCode;
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
                (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7) ||
                wDay === 0 || wDay === 4 || wDay === 5 || wDay === 6 
                ) {
                     if (wDay === 4 || wDay === 5) {
                          addaDay+=1;   
                     }
                     sDate.setDate(sDate.getDate() + 1);
                     wDay= sDate.getDay();
                }
                var sdd = sDate.getDate();
                var smm = sDate.getMonth() + 1;
                var sy = sDate.getFullYear();
                
                var startDate= smm + '/' + sdd + '/' + sy;
                console.log("start date after checking holidays, thursdays, fridays and weekends: "+startDate);
                LDCtt= smm + '/' + sdd + '/' + sy;
                console.log("tt date: "+LDCtt);
                
                for (var o in dates) {
                         
                    var nonWD= new Date(dates[o]);
                    var nWorkingD= new Date(nonWD);
                    
                    nWorkingD.setDate(nWorkingD.getDate());
                    
                    var nwdd = nWorkingD.getDate();
                    var nwmm = nWorkingD.getMonth() + 1;
                    var nwy = nWorkingD.getFullYear();
                    
                    var nonWorkingDay= nwmm + '/' + nwdd + '/' + nwy;
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
                            if (wDay === 4 || wDay === 5) {
                                 addaDay+=1;   
                            }
                            sDate.setDate(sDate.getDate() + 1);
                            wDay= sDate.getDay();
                            sdd = sDate.getDate();
                            smm = sDate.getMonth() + 1;
                            sy = sDate.getFullYear();
                            startDate= smm + '/' + sdd + '/' + sy;
                            console.log("start date after checking nonworking days: "+startDate);
                            LDCtt= smm + '/' + sdd + '/' + sy;
                            console.log("tt date: "+LDCtt);
                        }
                    }    
            console.log("start date after loop: "+startDate);
                    
            //---------------->
            console.log("tt date after loop: "+LDCtt);
            var date = new Date(LDCtt);
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
                    ){      
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
            LDCtt= endDate;
                
        }
    LDCgetStartAndEndDate();
    $('#startDAte').val(LDCtt);
    addaDay= 0;
}