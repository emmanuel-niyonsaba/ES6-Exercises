
const oddSquares =(arr)=>{
return arr.filter(a=>a%2!==0).map(a=>a*a)
}
console.log(oddSquares([1,2,4,5,6]))
