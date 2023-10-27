Function.prototype.myCall = function(obj, ...arr) {
  const newObj = obj || window
  newObj.func = this
  console.log('arr-->', arr)
  const result = newObj.func(...arr)
  delete newObj.func
  return result
}

function person (a, b, c) {
  console.log(this.name)
  console.log('abc', a, b, c)
}

let egg = {name: 'hs'}

person.myCall(egg, 1, 2, 3)