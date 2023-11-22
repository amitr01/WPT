var buf=Buffer.alloc(90);
for(var i=0;i<26;i++){
    buf[i]=i+65;
}
console.log(buf.toString());

var buf=Buffer.alloc(60);
buf.write("Simple Text is wriitten");
console.log(buf.toString());