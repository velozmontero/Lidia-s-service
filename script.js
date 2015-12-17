/*$(document).ready(function(){
    
    getInfo();
    
    $('#getInfo').click(getInfo);

    function getInfo(){
         $('#info').html("");
         $.ajax({

            url: 'http://159.203.70.55:5255/'+course+'/'+courseCode+'/'+startDate+'/'+endDate+'/'+hrs+'/'+gradDay+'/'+lastDayInClass+'/'+group,

            success: function(res){
                for (var x in res){
                    $('#info').append(
                        '<tr>'+'<td>'+res[x].courseCode+'</td>'+
                        '<td>'+res[x].startDate+'</td>'+
                        '<td>'+res[x].endDate+'</td>'+
                        '<td>'+res[x].hrs+'</td>'+
                        '<td>'+res[x].lastDayInClass+'</td>'+
                        '<td>'+res[x].gradDay+'</td>'+
                        '</tr>'
                    );
                    console.log(res);
                }
            },
            error: function(request,errortype,errorMessage){
                console.log("it is not working");
            }
        });
     };
});*/