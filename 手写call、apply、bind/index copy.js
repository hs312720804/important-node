Function.prototype.myCall = function(obj, ...arr) {
  const newObj = obj || windows
  newObj.fn = this
  const res = newObj.fn(...arr)
  delete newObj.fn
  return res
}

function person (a, b, c) {
  console.log(this.name)
  console.log('abc', a, b, c)
}

let egg = {name: 'hs'}

person.myCall(egg, 1, 2, 3)