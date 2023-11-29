// 3. 无重复字符的最长子串
// 中等
// 9.8K
// 相关企业

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 

// 提示：

//     0 <= s.length <= 5 * 104
//     s 由英文字母、数字、符号和空格组成

// 动态规划
// dp[i]  i为索引 以i为结尾的最长子串长度
// dp[i] = Math.max(dp[j] + 1, dp[i])


/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let list = [] // 滑动窗口，保存非重复元素
//   let res = 0
//   for (let char of s) {
//     const index = list.indexOf(char)
//     // 包含
//     if (index > -1) {
//       list = list.slice(index+1)
//     } 
//     list.push(char)
//     res = Math.max(res, list.length)
//   }

//   return res
// };


var lengthOfLongestSubstring = function(s) {
  let res = 0
  let set = new Set() // 存放窗口中不重复的值
  let right = 0
  for (let left = 0; left < s.length; left++) {
    // 每次挪动的时候，需要删掉前一位
    if (left !== 0) {
      set.delete(s[left-1])
    }
    while (right < s.length -1 && !set.has(s[right])) {
      set.add(s[right])
      right++
    }
    res = Math.max(res, right-left)
  }

  return res
}


// s = "abcabcbb"
s = "bbbbb"
console.log(lengthOfLongestSubstring(s))
