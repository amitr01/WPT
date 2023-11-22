const fs=require('fs');
fs.copyFile("test.txt","targettest.txt",function(err){
    if(err){
        console.log("error occured"+err);
    }else{
        fs.readFile("targettest.txt",function(err,data){
            if(err){
                console.log("error occured",err);
            }else{
                console.log(data.toString());
            }
            
        })
    }
})