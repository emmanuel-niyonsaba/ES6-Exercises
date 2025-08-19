let aga = 72;
const promise = new Promise((resolve,reject)=>{
    const operatin = aga
    if(operatin >18){
        resolve("Your eligible to come here at all")
    }else{
        reject("You are not allowed brother to come here")
    }
})
promise.then(a=>console.log(a)).catch(a=>console.log(a))