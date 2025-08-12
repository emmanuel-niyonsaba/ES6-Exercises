

const testArr =[1,2,3,4,5,6,7,8,9]
//for the myMap method

const myMap = testArr.map(a=>a*2)
//About filter method

const myFilter = testArr.filter(a=>a%2 ===0)

//About for each method

const myForEach = testArr.forEach((el,index,arr)=>{
    console.log(`the element was${el} 
        on index of${index}
         and the the actual array was ${arr}`)
})
