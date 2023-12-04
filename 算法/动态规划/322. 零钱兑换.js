// 322. 零钱兑换
// 中等
// 2.6K
// 相关企业

// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

 

// 示例 1：

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1

// 示例 2：

// 输入：coins = [2], amount = 3
// 输出：-1

// 示例 3：

// 输入：coins = [1], amount = 0
// 输出：0

 

// 提示：

//     1 <= coins.length <= 12
//     1 <= coins[i] <= 231 - 1
//     0 <= amount <= 104
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {

};

// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);//初始化dp数组
  dp[0] = 0;//面额0只需要0个硬币兑换

  for (let i = 1; i <= amount; i++) {//循环面额
    for (let coin of coins) {//循环硬币数组
      if (i - coin >= 0) {//当面额大于硬币价值时
        //dp[i - coin]： 当前面额i减当前硬币价值所需要的最少硬币
        //dp[i] 可由 dp[i - coin] + 1 转换而来
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // 如果dp[amount] === Infinity，则无法兑换
};
// 动归五部曲
// dp含义
// dp公式
// 初始化dp
// 遍历顺序
// 打印



// 方法1.动态规划

// 思路：dp[i]表示兑换面额i所需要的最少硬币，
// 因为硬币无限，所以可以自底向上计算dp[i]，
// 对于dp[0~i]的每个状态，循环coins数组，寻找可以兑换的组合，用i面额减去当前硬币价值，
// dp[i-coin]在加上一个硬币数就是dp[i],最后取最小值就是答案，
// 状态转移方程就是dp[i] = Math.min(dp[i], dp[i - coin] + 1);
// 复杂度分析：时间复杂度是O(sn)，s是兑换金额，n是硬币数组长度，
// 一共需要计算s个状态，每个状态需要遍历n个面额来转移状态。空间复杂度是O(s)，也就是dp数组的长度



