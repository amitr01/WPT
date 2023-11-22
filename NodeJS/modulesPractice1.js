addition=function(a,b){
    return a+b;
}
function function1(){
    console.log("in F1");
}
function function2(){
    console.log("In F2");

}
module.exports={
    f1:function1,
    f2:function2,
    addition:addition
}