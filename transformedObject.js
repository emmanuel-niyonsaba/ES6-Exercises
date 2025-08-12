const testObj ={
    "firstname": "John",
    "secondname": "Doe"
}

const transformKeys =(input)=>{

    let newObj ={}
    for(let a in input){
       newObj[a.toUpperCase()]=input[a] 
        
        
        }
    
return newObj
}
console.log(transformKeys(testObj))