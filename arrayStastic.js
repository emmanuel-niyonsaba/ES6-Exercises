

const arrayStats=(arr)=>{
    const sum= arr.reduce((a,b)=>a+b);
    const average = sum/arr.length;
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return `sum : ${sum} average : ${average}  Min : ${min} Max : ${max}`

}
console.log(arrayStats([12,2,2,1,2,2,1,2,3,4,4]))