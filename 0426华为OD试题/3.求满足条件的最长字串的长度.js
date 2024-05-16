// https://blog.csdn.net/qq_42247231/article/details/108561719
// 求满足条件的最长字串的长度
// 题目描述：

// 给定一个字符串，只包含字母和数字，按要求找出字符串中的最长（连续）子串，字符串本身是其最长的子串，子串要求：

// 只包含 1 个字母（a-z, A-Z），其余必须是数字
// 字母可以在子串中的任意位置
// 微信搜索：编程笔记本。获取更多干货！
// 微信搜索：编程笔记本。获取更多干货！

// 如果找不到满足要求的子串，如全是字母或全是数字，则返回 -1 。

// 输入描述：

// 字符串（只包含数字和字母）。

// 输出描述：

// 子串的长度。

// 示例：

// 输入：abC124ACb
// 输出：4
// 解释：C124 或 124A


function a (line) {
    let arr = [-1] // 重点！  需要把头 -1 尾 line.length 加入数组
    for (let i = 0; i < line.length; i++) {
        if (line[i].match(/[A-Z]/i)) {
            arr.push(i)
        }
    }
    arr.push(line.length)
    // console.log(arr)

    let max = 0
    for (let i = 0; i < arr.length - 2; i++) {
        const diff = arr[i+2] - arr[i]

        if (diff > 2) {
            max = Math.max(max, diff - 1)
        }
    }
    console.log(max)

}
a('a5')
a('aBB9')
a('abC124ACb')
a('abcdef')
a('121A212')


