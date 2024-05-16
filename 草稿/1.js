var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.lenght; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};

nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums))