const fs=require("fs");

var rs=fs.createReadStream("test.txt");
var ws=fs.createWriteStream("targetfile1.txt");
rs.pipe(ws);
console.log("ened of the code")

