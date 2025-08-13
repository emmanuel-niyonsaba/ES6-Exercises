
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

//Below code is about how i can find the max by apply
const numbers = [34, 12, 57, 28, 91]
const maxApply = Math.max.apply(null,numbers)
console.log(maxApply)