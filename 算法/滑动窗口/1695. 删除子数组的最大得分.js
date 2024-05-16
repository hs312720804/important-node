/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let strSet = new Set()
    let max = 0
    let maxArr = []
    let end = 0
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) {
            strSet.delete(nums[i-1])
        }

        while (end < nums.length && !strSet.has(nums[end])) {
            strSet.add(nums[end])
            end++
        }
        if (end-i > max) {
            max = end - i
            maxArr = [i, end]
        }

    }
    const slArr = nums.slice(maxArr[0], maxArr[1])
    console.log(maxArr)

    const res = slArr.reduce((total,item) =>  total+item, 0)
    return res
};

nums = [5,2,1,2,5,2,1,2,5]
console.log(maximumUniqueSubarray(nums))