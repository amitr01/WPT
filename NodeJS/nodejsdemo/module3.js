function f1(){
    console.log("in f1")
}
function f2(){
    console.log("in f2")
}
function f3(){
    console.log("in f3")
}
var user={no:1,name:"xxxxx"};

module.exports={
    function1:f1,
    function2:f2,
    function3:f3,
    user:user 
}