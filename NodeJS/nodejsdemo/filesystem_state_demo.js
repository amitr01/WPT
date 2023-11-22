const fs=require('fs');
fs.stat("test.txt",function(err,status){
  if(err){
    console.log("Error: "+err.code+"--->"+err.message)
    console.log("error occured",err);
  }else{
     console.log(status);
     console.log("isFile : "+status.isFile());
     console.log("isFile : "+status.isDirectory());
     console.log("size:"+status.size)
  }
})