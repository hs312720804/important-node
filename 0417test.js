// function a (line, code) {
//     let count = 0
//     for (let s in line) {
//         if (s.toUpperCase() === code.toUpperCase()) {
//             count++
//         }
//     }
//     console.log(count);
// }
// a('ABCabc', 'A')
// -----------------------------------------
// function a (tokens) {
//     const len = tokens.length
//     if (len) {
//         const y = len % 8
//         let str = tokens + new Array(8 - y).fill(0).join('')
//         let right = 8
//         while (right <= str.length) {
//             console.log(str.slice(right-8, right))
//             right+=8
//         }
//     }
// }
// a('abc')

// 描述
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）


// ------------------------------
 
// 1≤n≤2×10 
// 9
//  +14 
// 输入描述：
// 输入一个整数

// 输出描述：
// 按照从小到大的顺序输出它的所有质数的因子，以空格隔开。

// ------------------------------
// function a (n) {
//     let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
//     console.log(res)
//     let count = 1
//     for (let i = 0; i < n; i++) { //行
//         let row = i
//         let column =  0
//         while (row >= 0) {
//             res[row][column] = count++
//             row--
//             column++
//         }
//     }
//     console.log(res)
// }
// a(4)

