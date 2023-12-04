function Parent (name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.say = function (age) {
  this.age = age
} 

function Child (name, age, price) {
  Parent.call(this, name, age)
  this.price = price
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const child = new Child('hh', 18, 50)
console.log('a', child)


