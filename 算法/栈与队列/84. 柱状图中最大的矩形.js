// 84. 柱状图中最大的矩形
// 困难
// 2.6K
// 相关企业

// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

// 示例 1:

// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

// 示例 2：

// 输入： heights = [2,4]
// 输出： 4



// 提示：

//     1 <= heights.length <=105
//     0 <= heights[i] <= 104

/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//   let max = 0
//   for (let i = 0; i < heights.length; i++) {

//   }
// }
// 单调栈 门口最大
const largestRectangleArea = (heights) => {
  let max = 0
  heights = [0, ...heights, 0]
  let stack = []
  for (let i = 0; i < heights.length; i++) {
    while(heights[i] < heights[stack[stack.length - 1]]) {
      const popIndex = stack.pop()
      max = Math.max(
        max, 
        heights[popIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }
  return max
}

// heights = [2,1,5,6,2,3]
heights = [2,1,2]

console.log(largestRectangleArea(heights))