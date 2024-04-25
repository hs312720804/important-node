// 题目描述:给你一个字符串5,字符串s首尾相连成一个环形,请你在环中找出'。'字符出现了偶数次最长子字符串的长度,
// 输入描述:输入是一串小写字母组成的字符串
// 输出描述:输出是一个整数
// 补充说明:1<=s.length<=5x10^5s只包含小写英文字母，

function test (str) {
    let arr = str.split('')
    // 判断有几个 o 
    const filterArr = arr.filter(item => item === 'o')
    if (filterArr.length % 2 === 0) {
        console.log(arr.length) 
        return
    }
    // 如果是偶数 那就是最后一个O
    // const flag = filterArr % 2 === 0  // true偶数

    // 如果是奇数  最后一个o的前一位
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        // [0 - i]  [i  arr.length]
        let arr1 = arr.slice(0, i)
        let arr2 = arr.slice(i, arr.length)
        let newArr = arr2.concat(arr1)
        const startIndex = newArr.findIndex(item => item === 'o')
        const lastIndex = newArr.findLastIndex(item => item === 'o')
        
        const num1 = newArr.length - 1 - (startIndex + 1) + 1
        const num2 = lastIndex - 1 - 0 + 1
        
        
        max = Math.max(max, num1, num2)
    }

    console.log(max)
}
// test('alolobo')
test('looxdolx')
test('bcbcbc')