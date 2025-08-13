

//for the myMap method

Array.prototype.myMap= function(callBackFun){
    let result = []
    for( i =0 ; i<this.length; i++){
        if(i in this){
            result.push(callBackFun(this[i],i,this))
        }
    }
    return result
}
//About filter method

Array.prototype.MyFilter= function(callBackFun){
    let result =[]
    for(i=0; i<this.length;i++){
        if( i in this){
result.push(callBackFun(this[i],i,this))
}
}
return result
}
// this phase if for testin the custom method i have created

const testArr =[1,2,3,4,5,6,7,8,9]
const myMapResult= testArr.myMap(num=>num*2)
console.log(myMapResult)