
const nurrableConvetion =(obj)=>{
    for(let item in obj){
        if(item ===null){
            item=0
        }
        if(item ===undefined){
            item =""
        }
        return obj
    }
}
const testObj ={
    name: undefined,
    price:null,
    city: "Kigali"
}
console.log(nurrableConvetion(testObj))