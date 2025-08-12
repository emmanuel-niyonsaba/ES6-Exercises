
const noDuplicate =(arr)=>{
    let result =[]
    for(let value of arr){
if(!result.includes(value)){
    result.push(value)
}
    }
    return result
}   
console.log(noDuplicate([1,2,3,1,2,3,4,5,6,7,8,5,4,3,2,12]))