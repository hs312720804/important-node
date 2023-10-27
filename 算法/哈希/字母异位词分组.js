// 49. 字母异位词分组
// 中等
// 1.7K


// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"], ["nat","tan"], ["ate","eat","tea"]]

// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]

// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]

 
// 提示：

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] 仅包含小写字母

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 复杂度分析

  // 时间复杂度：O(nklog⁡k)，
  // 其中 n 是 strs中的字符串的数量，
  // k 是 strs 中的字符串的的最大长度。
  // 需要遍历 n 个字符串，对于每个字符串，
  // 需要 O(klog⁡k)的时间进行排序以及 O(1)的时间更新哈希表，
  // 因此总时间复杂度是 O(nklog⁡k)。

  // 空间复杂度：O(nk)，
  // 其中 n 是 strs中的字符串的数量，
  // k 是 strs 中的字符串的的最大长度。
  // 需要用哈希表存储全部字符串.

var groupAnagrams = function(strs) {
  let map = new Map()
  strs.forEach(item => {
    let array = Array.from(item)
    array.sort()
    const key = array.toString()
    let list = map.get(key) ? map.get(key) : []
    list.push(item)
    map.set(key, list)
  })
  return map.values()
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))