const fs=require('fs');
console.log("before readfile async");
fs.readFile("test.txt",function(err,data){
    if(err){
        console.log("error occured",err);
    }else{
        console.log("in asynchronous read")
       console.log(data.toString()+"---->"+data.length);
    }
});
console.log("after readfile async")
//synchronoudread
console.log("before readfile sync");
var data1=fs.readFileSync("test.txt")
console.log("synchronous read: "+data1)
console.log("after readfile sync");