global.bird="sparrow";
global.companyName="IACSD"

function getglobal(varname){
    console.log(global[varname])
}

console.log(getglobal("bird"));
console.log(getglobal("xxxx"));
for(var ob in global){
    console.log(ob+"----->"+global[ob])
}