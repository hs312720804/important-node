// 438. 找到字符串中所有字母异位词
// 中等
// 1.3K
// 相关企业

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

 

// 提示:

//     1 <= s.length, p.length <= 3 * 104
//     s 和 p 仅包含小写字母

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
//   5 >> 1
// };
// 复杂度分析

// 时间复杂度：O(m+(n−m)×Σ)
// 其中 n 为字符串 s 的长度，m 为字符串 p 的长度，Σ 为所有可能的字符数。
// 我们需要 O(m) 来统计字符串 p 中每种字母的数量；
// 需要 O(m) 来初始化滑动窗口；
// 需要判断 n−m+1个滑动窗口中每种字母的数量是否与字符串 p 中每种字母的数量相同，
// 每次判断需要 O(Σ)。
// 因为 s 和 p 仅包含小写字母，所以 Σ=26

// 空间复杂度：O(Σ)。用于存储字符串 p 和滑动窗口中每种字母的数量。



var findAnagrams = function(s, p) {
  const sLen = s.length, pLen = p.length;

  if (sLen < pLen) {
      return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
      sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++;
      pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  if (sCount.toString() === pCount.toString()) {
      ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
      sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
      sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++;

      if (sCount.toString() === pCount.toString()) {
          ans.push(i + 1);
      }
  }

  return ans;
};

let s = "cbaebabacd"
let p = "abc"

console.log(findAnagrams(s, p))








