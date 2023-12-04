
class Parent {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  say () {
    console.log('I am Parent')
  }
}

class Child extends Parent {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  // say () {
  //   console.log('I am child')
  // }
}
const child = new Child('hh', 18, 50)
console.log('a', child)
child.say()
