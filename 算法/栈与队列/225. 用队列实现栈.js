var MyStack = function() {
  this.list = []
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.list.push(x)
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  for (let i = 0; i < this.list.length - 1; i++) {
      this.list.push(this.list.shift())
  }
  return this.list.shift()
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  debugger
  for (let i = 0; i < this.list.length - 1; i++) {
      this.list.push(this.list.shift())
  }
  const res = this.list.shift()
  this.list.push(res)
  return res
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.list.length === 0
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
var obj = new MyStack()
obj.push(1)
obj.push(2)
var param_2 = obj.top()
var param_3 = obj.pop()
var param_4 = obj.empty()

console.log(param_2)
console.log(param_3)
console.log(param_4)
console.log(obj)