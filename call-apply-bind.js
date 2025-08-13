
// This it is for applying the explicty binding by using call, apply and bind methods.


const obj1 ={
    height: 5,
    width: 10
}
function calculateArea (){
    return this.height* this.width
}
const objArea = calculateArea.bind(obj1)
console.log(objArea())

//