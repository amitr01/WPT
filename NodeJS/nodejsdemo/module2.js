function factorial(n){
    f=1
    for(var i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
exports.permution=function(n,r){
    var ans=factorial(n)/factorial(n-r)
    return ans;
}
exports.combination=function(n,r){
    var ans=factorial(n)/(factorial(n-r)*factorial(r))
    return ans;
}