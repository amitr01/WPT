//Reading from Stream
const fs=require('fs');
var rs=fs.createReadStream("practice.txt","utf-8");
var value="";
rs.on("data",function(chunnk){
    value+=chunnk;
});
rs.on("end",function(){
    console.log(value);

})
rs.on("error",function(err){
    console.log(err.stack);
})
console.log("Program Ended");

//Pipe in Node js
var ws=fs.createWriteStream("write.txt");
rs.pipe(ws);
console.log("Writing",ws.toString());