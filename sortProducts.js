const sortProducts =(arrObj)=>{

    return arrObj.sort((a,b)=> a.Price - b.Price)
}
console.log(sortProducts([{product:"mango",Price:400},{product:"casava",Price:100},{product:"rice",Price:600}]))