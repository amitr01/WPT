const mysql=require("mysql");
var mysqlconnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root123',
    //database we are using in our server 
    database:'expr',
    port:3306

});
mysqlconnection.connect((err)=>{
    if(err){
        console.log("Failed Connecting to Database",err);
    }
    else{
    
        console.log("Connected Succesfully to Database");
    }
    });
module.exports=mysqlconnection;