// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

 

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 单调队列
class monoQueue {
  constructor (nums) {
    this.nums = nums
    this.queue = []
  }
  // 入栈
  enqueue (index) {
    const value = this.nums[index]
    while (this.queue.length && value >= this.nums[this.queue[this.queue.length - 1]]) {
      this.queue.pop()
    }
    this.queue.push(index)
  }
  // 出栈
  dequeue (index) {
    if (index >= this.getFirst()) {
      this.queue.shift()
    }
  }
  getFirst () {
    return this.queue[0]
  }
}
var maxSlidingWindow = function(nums, k) {
  const res = []
  const queue = new monoQueue(nums)
  let i = 0;
  let j = 0;
  while (j < k) {
    queue.enqueue(j++)
  }
  res.push(nums[queue.getFirst()])

  while (j < nums.length) {
    queue.enqueue(j++)
    queue.dequeue(i++)
    res.push(nums[queue.getFirst()])
  }

  return res
};


// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindow(nums, k))