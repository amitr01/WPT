//Libraries
const express=require("express");
const app=express();
const ejs=require("ejs");
const mysql=require("mysql");
const path=require("path");
const bodyparser=require("body-parser");
const routes=require("./routes/router.js");

//const { urlencoded } = require("body-parser");

//configure
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//middleware
app.use(bodyparser.urlencoded({extended:false}));

//router code
app.use("/",routes);

//server start
app.listen(9000,function(){
    console.log("Server Started Successfully at 9000");
});
module.exports=app;
