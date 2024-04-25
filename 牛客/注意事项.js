// 正则    \s  代表空白字符
//       /[A-Z]/i   不区分大小写
// const a = tokens.filter(char => char.match(/[A-Za-z]/g))  过滤英文字符
// const b = tokens.filter(char => char.match(/\s/g))        空格
// const c = tokens.filter(char => char.match(/[0-9]/g))     数字
// const d = tokens.filter(char => char.match(/[^0-9\s/A-Za-z]/))  其他



// 01背包   物品从 1 开始  容量也从 1 开始  《购物单》


// 字符串排序  非英文字母的其它字符保持原来的位置。
// 可以一个个替换
// for (let i = 0; i < tokens.length; i++) {
//     if (tokens[i].match(/[A-Z]/i)) {
//         tokens[i] = strArr.shift()
//     }
// }