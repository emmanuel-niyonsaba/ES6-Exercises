

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
   for(i =0 ; i<this.length; i++){
    if(i in this){
        if(callBackFun(this[i],i,this)){
            result.push(this[i])
        }
    }
   }

return result
}

//this if for the myForEach custom method

Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callbackFn(this[i], i, this);
    }
  }
 
};

// this phase if for testin the custom method i have created

const testArr =[1,2,3,4,5,6,7,8,9]
const myMapResult= testArr.myMap(num=>num*2)
console.log(myMapResult)


// test for mayFilter custom method

const MyFilterResult =testArr.MyFilter(a=> a%2 !==0)
console.log(MyFilterResult)


// Test for mayForEach custon method 
const myForEachResult = testArr.myForEach(a=> console.log(`element is ${a}`))
console.log(myForEachResult)