function main(){
    return new Promise(function(resolve,reject){
        resolve();
    })


}
main()
.then(function(){
    console.log("sucess");
})
.catch(function(){
    console.log("error");
})
