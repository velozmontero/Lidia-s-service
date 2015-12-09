var mysql = require('mysql'); //has to be installed with npm

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Montero04',
    database:'register_app'
});
connection.connect();

var port= 5255; 
var express= require('express');

var app= express();
var bodyParser= require("body-parser");

//prupose of this is to enable cross domain requests
app.use(function(req, res, next){
   res.header("Access-Control-Allow-Origin", "*");
   next();
});
app.use(bodyParser.urlencoded({extended: true}));

app.post('/education/:course/:courseCode/:startDate/:endDate/:hrs/:lastDayInClass/:gradDay/:group', function(req,res){
    var course= req.params.course;
    var courseCode= req.params.courseCode;
    var startDate= req.params.startDate;
    var endDate= req.params.endDate;     
    var hrs= req.params.hrs;
    var gradDay= req.params.gradDay;
    var lastDayInClass= req.params.lastDayInClass;
    var group= req.params.group;
    
    console.log(course+' '+courseCode+' '+startDate+' '+endDate+' '+hrs+' '+gradDay+' '+lastDayInClass+' '+group);
    
    connection.query("INSERT INTO "+course+"_"+group+" (course_code, start_date, end_date, hrs, last_day_in_class, grad_date) VALUES " + "("+courseCode+", "+startDate+", "+endDate+", "+hrs+", "+lastDayInClass+", "+gradDay+")", function(err){
        if (err){
            res.end("DB error"+err);
            console.log("DB insertion failed"+ err);
        }
        else{
            res.end("Success");
            console.log("DB insertion success");
        }
    });  
});

app.get('/getEducation/:course/:courseCode/:startDate/:endDate/:hrs/:lastDayInClass/:gradDay/:group', function(req,res){
    var course= req.params.course;
    var courseCode= req.params.courseCode;
    var startDate= req.params.startDate;
    var endDate= req.params.endDate;     
    var hrs= req.params.hrs;
    var lastDayInClass= req.params.lastDayInClass;
    var gradDay= req.params.gradDay;
    var group= req.params.group;
    
    console.log(course+' '+courseCode+' '+startDate+' '+endDate+' '+hrs+' '+gradDay+' '+lastDayInClass+' '+group);
    
    var query= 'SELECT course_code, start_date, end_date, hrs, last_day_in_class, grad_date FROM '+course+'_'+group+' ';

       connection.query(query, function(err, rows){
            if (!err){
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(rows));
                console.log('The solution is: ', rows);
            }
            else{
                console.log('Error while performing query');
            }
        });  
   
});

app.listen(port);
console.log("Server listening on port "+port);