// https://juejin.cn/post/6844903773979033614?searchId=202311281510435B357D35F42CE755FF48#heading-5
// 通过第一次打印执行和第二次打印执行我发现，
// 如果 Person1 有 say 方法那么 Person1 直接执行 Person1.say() 
// 结果就是我是Tom1,是的 call 就是这么实现的。 再看代码
//  手写 call
Function.prototype.myCall = function(obj, ...arg) {
  const newObj = obj || window
  newObj.fn = this
  const res = newObj.fn(...arg)
  delete newObj.fn
  return res
}

//  手写 apply
Function.prototype.myApply = function(obj, arg) {
  // 如果没有传或传的值为空对象 context指向window
  const newObj = obj || window

  newObj.fn = this //给context添加一个方法 指向this
  const res = newObj.fn(...arg) //执行fn
  delete newObj.fn //删除方法
  return res
}




// function person (a, b, c) {
//   console.log(this.name)
//   console.log('abc', a, b, c)
// }

// let egg = {name: 'hs'}

// person.myCall(egg, 1, 2, 3)
const _this = global // nodejs 中全局变量是 global，不是 window, window 是浏览器里面的。
let Person = {
  name: 'Tom',
  say(age, age2) {
    console.log(this)
    console.log(this === global)
    console.log(this === Person1)
    console.log('--------------------------')
    console.log(`我叫${this.name}`)
    console.log(`我的年龄是${age}`)
    console.log(`我的年龄是${age2}`)
  }
}

// 先看代码执行效果
// Person.say() //我叫Tom 
Person1 = {
  name: 'Tom1'
}


// 我们尝试用原生方法call来实现this指向Person1
// Person.say.call(Person1) //我叫Tom1
// Person.say.myCall(Person1) //我叫Tom1

Person.say.myApply(Person1, [18,19]) //我叫Tom1