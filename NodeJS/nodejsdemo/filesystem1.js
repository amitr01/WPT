const fs=require('fs');
//write to the file synchronously
fs.writeFileSync("test.txt","The text to be written in the file test.txt")
//read data from file synchronously
var data=fs.readFileSync("test.txt")
console.log(data.toString());