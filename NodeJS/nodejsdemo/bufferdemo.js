//this is deprecated
//alocates 10 memory locations
var buff1=new Buffer(10);
//allocate 10 80 memory locations
var buff2=Buffer.alloc(80);
for( var i=0;i<26;i++){
    buff2[i]=i+97
}
//display buffer data in character format
console.log(buff2.toString('ascii'));
console.log(buff2.toString('UTF8',0,5));
console.log(buff2.toString('UTF8',5,8));
var target=Buffer.alloc(buff2.length)
buff2.copy(target,0,0,10)
console.log("buff2"+target.toString())
console.log("target"+target.toString())

//write a code to allocate 100 locations for buff3
//and store cpaital alphabets into it and display it
var buff3=Buffer.alloc(100);
for(var i=0;i<26;i++){
    buff3[i]=i+65;
}
console.log(buff3.toString());