// 394. 字符串解码
// 中等
// 1.6K
// 相关企业

// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

// 示例 1：

// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"

// 示例 2：

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"

// 示例 3：

// 输入：s = "2[abc]3[cd]ef"
// 输出："abcabccdcdcdef"

// 示例 4：

// 输入：s = "abc3[cd]xyz"
// 输出："abccdcdcdxyz"

 

// 提示：

//     1 <= s.length <= 30
//     s 由小写英文字母、数字和方括号 '[]' 组成
//     s 保证是一个 有效 的输入。
//     s 中所有整数的取值范围为 [1, 300] 

/**
 * @param {string} s
 * @return {string}
 */
// 3[a2[c]]
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let st = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    // 这个时候要取出数据进行操作了
    if (char === ']') { 
      let str = ''// 组装字符串
      let cur = st.pop()
      while (cur !== '[') {
        str = cur + str // cur字符加在左边
        cur = st.pop()
      }
       // 此时cur为 [，接下来要遇到数字
      cur = st.pop()  // 用下一个将 [ 覆盖
      let count = '' // 组装数字
      while (!isNaN(cur)) {
        count = cur + count // 数字字符加在左边
        cur = st.pop()
      }
      // 因为上面多pop了一个，所以这里需要重新push进去
      st.push(cur)
      st.push(str.repeat(Number(count)))
    } else {
      st.push(char)
    }
  }
  return st.join('')
};



// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
s = "100[leetcode]"
// s = "3[a2[c]]"

console.log(decodeString(s))