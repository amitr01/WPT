//Synchronously
var fs=require("fs");
fs.writeFileSync("practice.txt","Amit is practicing the file System");
var data=fs.readFileSync("practice.txt");
console.log(data.toString());

//Asynchronously
fs.readFile("practice.txt",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Reading file Asynchronously"+data.toString());
})

//Opening a File
var value="";
fs.open("practice.txt","r",function(err,fd){
    value=Buffer.alloc(200);
    fs.read(fd,value,0,10,null,function(err,byteread,buffer){
        console.log(buffer.toString());
        fs.close(fd,function(){
            console.log("Reached to the End");
        })
    })
})
//Node js Status 
fs.stat("practice.txt",function(err,status){
   if(err){
    return console.error(err);
   }
   console.log(status);
   console.log("Size"+status.size);
})

//copying the file
fs.copyFile("practice.txt","test.txt",function(err){
    if(err){
        return console.error(err);
    }
    fs.readFile("test.txt",function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Data"+data.toString());
    })
})