// function a (num, rowNum) {
//     // 个数: num  9
//     // 行数: rowNum  4

//     // 列
//     let columnNum = Math.ceil(num / rowNum)
//     // 列的限制
//     let columnMax = [0, columnNum-1]
    
//     // 行的限制
//     let rowMax = [0, rowNum-1]
//     let res = new Array(rowNum).fill(undefined).map(item => new Array(columnNum).fill(undefined))

//     let count = 1
//     let x = 0
//     let y = 0

//     run('right')
//     function run (direction) {
//         if (count === num) { return }
//         // while (let x = columnMax) {
//         let i1 = [rowMax[0], columnMax[0]]  //右
//         let i2 = [rowMax[0], columnMax[1]] //下
//         let i3 = [rowMax[1], columnMax[1]] //左
//         let i4 = [rowMax[1], columnMax[0]] //上
//         // res[x][y] = count++
//         // }
        
//         if (x === i1[0] && y === i1[1]) {
//             rowMax[0] = x+1
//             // columnMax = []
//             // run('right')
//             direction = 'right'
//             run(direction)
//         }
//         else if (x === i2[0] && y === i2[1]) {
//             rowMax[1] = x-1
//             // run('right')
//             direction = 'down'
//             run(direction)
//         }
//         else if (x === i3[0] && y === i3[1]) {
//             columnNum[1] =  y-1
//             // run('right')
//             direction = 'left'
//             run(direction)
//         }
//         else if (x === i4[0] && y === i4[1]) {
//             columnNum[0] =  y+1
//             // run('right')
//             direction = 'up'
//             run(direction)
//         }
//         if (direction === 'right') {
//             res[x][y] = count
//             y++
            
//         } else if (direction === 'down') {
//             res[x][y] = count
//             x++
//         } else if (direction === 'left') {
//             res[x][y] = count
//             y--
//         } else if (direction === 'up') {
//             res[x][y] = count
//             x--
//         }
//         count++
        

//     }
//     console.log(res)

// }
// a(9,4)


// 作者：代码随想录
// 链接：https://leetcode.cn/problems/spiral-matrix-ii/solutions/1706277/by-carlsun-2-72fa/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 200分的
/**
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var spiralMatrix = function(num, m) {
    let n = Math.ceil(num / m)
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill('*')); // 初始化-1
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    let count = 1
    while (left <= right && top <= bottom && count <= num) {
        for (let column = left; column <= right; column++) {
            matrix[top][column] = count
            count++
            if (count > num) { // 结束了直接返回，避免报错
                return matrix;
            }
        }
        for (let row = top + 1; row <= bottom; row++) {
            matrix[row][right] = count
            count++
            if (count > num) { // 结束了直接返回，避免报错
                return matrix;
            }
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                matrix[bottom][column] = count
                count++
                if (count > num) { // 结束了直接返回，避免报错
                    return matrix;
                }
            }
            for (let row = bottom; row > top; row--) {
                matrix[row][left] = count
                count++
                if (count > num) { // 结束了直接返回，避免报错
                    return matrix;
                }
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return matrix;
};


// console.log(spiralMatrix(9, 4))
console.log(spiralMatrix(3, 5))
  
