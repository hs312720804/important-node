// 两数之和
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
function twoSum(nums, target) {
  let map = new Map()
  // nums.forEach((item, index) => {
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return [map.get(nums[i]), i]
      } else {
        map.set(target-nums[i], i)
      }
    }
  // });
 
  // for (let i = 0; i < nums.length; i++) {
  //   const cha = target - nums[i]
  //   if (hashMap.get(cha) !== undefined) {
  //       return [hashMap.get(cha), i]
  //   } else {
  //       hashMap.set(nums[i], i)
  //   }
  // }
}
console.log(twoSum([2,4,7,15], 9))
