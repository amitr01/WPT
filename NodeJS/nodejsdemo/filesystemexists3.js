const fs=require("fs");
var fname="test.txt";
fs.exists(fname,function(exists){
    if(!exists){
        console.log("file not found")
    }else{
        fs.open(fname,"r",function(err,fd){
            var buffer=Buffer.alloc(200);
            //fd--> file descriptor, buffer---> memory to store data,
            //0 means start writing from 0th position in the buffer
            //10 --- number of character tobe read from the file
            //null---> start reading from the current position of the file
            //callback function (error, number of bytes actually read,
            //buffer inwhich data is stored)
            fs.read(fd,buffer,0,10,null,function(err,byteread,buffer){
                    console.log(buffer.toString());
                    fs.close(fd,function(){
                        console.log("reached to end")
                    });
            });
            
       
        })
    }
})