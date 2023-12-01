
var MinStack = function() {
  this.stack = []
  this.minSt = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  
  if (this.minSt.length && this.minSt[this.minSt.length - 1] < val) {
    this.minSt.push(this.minSt[this.minSt.length - 1])
  } else {
    this.minSt.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minSt.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minSt[this.minSt.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
var param_1 = obj.getMin()
obj.pop()
var param_2 = obj.top()
var param_3 = obj.getMin()
console.log('param_1-->', param_1)
console.log('param_2-->', param_2)
console.log('param_3-->', param_3)