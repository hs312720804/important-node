// 155. 最小栈
// 提示
// 中等
// 1.7K
// 相关企业

// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

//     MinStack() 初始化堆栈对象。
//     void push(int val) 将元素val推入堆栈。
//     void pop() 删除堆栈顶部的元素。
//     int top() 获取堆栈顶部的元素。
//     int getMin() 获取堆栈中的最小元素。

 

// 示例 1:

// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// 输出：
// [null,null,null,null,-3,null,0,-2]

// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

 

// 提示：

//     -231 <= val <= 231 - 1
//     pop、top 和 getMin 操作总是在 非空栈 上调用
//     push, pop, top, and getMin最多被调用 3 * 104 次



var MinStack = function() {
  this.stack = []
  this.minStack = [] // 单调栈
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  let temp = []
  while (this.minStack.length && this.minStack[this.minStack.length - 1] < val) {
    temp.push(this.minStack.pop())
  }
  this.minStack.push(val)
  while (temp.length) {
    this.minStack.push(temp.pop())
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const popVal = this.stack.pop()

  let temp = []
  while (this.minStack.length && this.minStack[this.minStack.length - 1] !== popVal) {
    temp.push(this.minStack.pop())
  }
  this.minStack.pop()
  while (temp.length) {
    this.minStack.push(temp.pop())
  }
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
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
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