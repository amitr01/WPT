const fs=require('fs');
fs. createReadStream(f,{bufferSize: 128 * 1024});
var rs=fs.createReadStream("test.txt","utf8");
var value="";

rs.on("end",function(){
   console.log("reached to end of file");
   console.log(value);

})
rs.on("error",function(err){
   console.log("error occured")
})
rs.on("data",function(chunk){
    console.log("data event occur")
    value=value+chunk;
})