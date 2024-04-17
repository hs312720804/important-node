// 1
// const tom = {
//   size: 'big'
// }
// const mouse = {
//   name: 'jerry',
//   big: false
// }

// console.log(mouse[tom.size])
// console.log(mouse.tom.size)

// 2
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius *2;
//   },
//   perimeter: ()=>2 *Math.PI * this.radius
// }
// console.log(shape.diameter())
// console.log(shape.perimeter())

// 3
identity ='The Window';
let object = {
  identity:'My Object',
  getIdentity () {
    return this.identity;
  }
};
console.log((object.getIdentity)()); // My Object
console.log((object.getIdentity = object.getIdentity)()); // The Window