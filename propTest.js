

function Person (name,age,city){
    this.name=name
    this.age=age
    this.city=city
}
Person.prototype.details = function(){
    return `name is ${this.name} age was ${this.age} and city was ${this.city}`
}
const person1 = new Person("Emmy",45,"Kigali")
console.log(person1.details())