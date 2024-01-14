/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	const len = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = len + 1
        }
    }

     for (let i = 0; i < nums.length; i++) {
        const item = Math.abs(nums[i])
        if (item >= 1 && item <= len) {
            nums[item - 1] = -Math.abs(nums[item - 1])
        }
    }

     for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i+1
        }
    }
    return len+1
};

nums = [2,2]
console.log(firstMissingPositive(nums))
