

// this is to change the array into object

function arrayLikeObject (aLo){
   
    return Object.fromEntries(aLo)

}
const testArr = [["name","emmanel"],["age",13]]
const result = arrayLikeObject.apply(null,[testArr])
console.log(result)
