// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]

// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function(numRows) {
//   // let memo = new Map()
//   // let name = "计时器1"
//   // console.time(name)
//   dp = []
//   const arr = []

//   for (let i = 0; i < numRows; i++) {
//     dp = sum(dp)
//     arr[i] = dp
//   }

//   function sum (arr) {
//     if (arr.length === 0) {
//       return [1]
//     } else if (arr.length === 1) {
//       return [1,1]
//     }
//     const res = []
//     for (let i = 0; i < arr.length-1; i++) {
//       let total = arr[i] + arr[i+1]
//       res.push(arr[i] + arr[i+1])
//     }
    
//     return [1, ...res, 1]
//   }
//   // console.timeEnd(name)
//   return arr
// }



var generate = function(numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i+1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = res[i-1][j-1] + res[i-1][j]
    }
    res.push(row)
  }
  return res
};

console.log(generate(8))













// var generate = function(numRows) {
//   const ret = [];

//   for (let i = 0; i < numRows; i++) {
//       const row = new Array(i + 1).fill(1);
//       for (let j = 1; j < row.length - 1; j++) {
//           row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
//       }
//       ret.push(row);
//   }
//   return ret;
// };

