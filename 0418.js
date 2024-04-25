// var num = 10
// function clas() {
//   this.num = 0
//   return {
//     num: 100,
//     getNum: () => {
//       console.log(this.num)
//     },
//     getNum2 () {
//       console.log(this.num)
//     }
//   }
// }
// const o = new clas()
// o.getNum()
// o.getNum2()

const map = new Map()
map.set(true,0)
map[true] = 1
console.log(1,map.set(true))
console.log(2,map.set('true'))
console.log(3,map.set['true'])