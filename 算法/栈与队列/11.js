
nums = [1,3,-1,-3,5,3,6,7], k = 3
nums = [1,-1], k = 1
nums = [-7,-8,7,5,7,1,6,0], k = 4
// nums = [1,3,1,2,0,5], k = 3
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const queue = []
  const res = []
  for (let i = 0; i < k; i++ ) {
      while (queue.length > 0 && nums[queue[queue.length -1]] < nums[i]) {
          queue.pop()
      }
      queue.push(i)
  }
  res.push(nums[queue[0]])
  for (let i = k; i < nums.length; i++ ) {
      
      while (queue.length > 0 && nums[queue[queue.length -1]] < nums[i]) {
          queue.pop()
      }
      queue.push(i)
      
      
      if (queue.length > 0 && nums[queue[0]] === nums[i - k]) {
          queue.shift()
      }
      res.push(nums[queue[0]])
      
  }
  return res
};
console.log(maxSlidingWindow(nums, k)

)