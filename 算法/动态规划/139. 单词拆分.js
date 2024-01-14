// 139. 单词拆分
// 中等
// 2.4K
// 相关企业

// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
//      注意，你可以重复使用字典中的单词。

// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false

 

// 提示：

//     1 <= s.length <= 300
//     1 <= wordDict.length <= 1000
//     1 <= wordDict[i].length <= 20
//     s 和 wordDict[i] 仅由小写英文字母组成
//     wordDict 中的所有字符串 互不相同

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

};
// d[i][j] = 索引 i-j 之间需要用字典单词的次数
// s = "leetcode", wordDict = ["leet", "code"]

var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const str = s.slice(j, i)
            const flag = wordDict.includes(str)
            dp[i] = dp[j] && flag
            if (dp[i]) {
              break
            }
        }
    }
    return dp[s.length]

}
s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))