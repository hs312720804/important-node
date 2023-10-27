// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。
// 换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

 
// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2
 

// 提示:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// 题目保证可以到达 nums[n-1]


/**
 * @param {number[]} nums
 * @return {number}
 * @date 23-10-11
 */
// var jump = function(nums) {
//   const len = nums.length
//   let end = nums.length - 1
//   let step = 0

//   for (let i = len - 2; i >= 0; i--) {
//     if ( nums[i] + i >=end ) {
//       end = i
//     }
//   }

//   return end === 0
// };
// 反向查找出发位置
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// var jump = function(nums) {
//   let position = nums.length - 1;
//   let steps = 0;
//   while (position > 0) {
//       for (let i = 0; i < position; i++) {
//           if (i + nums[i] >= position) {
//               position = i;
//               steps++;
//               break;
//           }
//       }
//   }
//   return steps;
// }


function jump (nums) {
  // 去遍历能到的位置中，数值最大的
  const len = nums.length
  let steps = 0
  let end = 0
  let maxStep = 0
  for (let i = 0; i < len - 1; i++) {
    maxStep = Math.max(maxStep, i + nums[i])
    if (i === end) {
      steps++
      end = maxStep
    }

    if (nums[i] + i >= len-1) {
      steps++
      break
    }
  }
  return steps
}

console.log(jump([2,3,0,1,4]))