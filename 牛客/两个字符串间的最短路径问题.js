// https://zhuanlan.zhihu.com/p/686098987
// 两个字符串间的最短路径问题
// 动态规划
// 题目描述:给定两个字符串,分别为字符串A与字符串B。
// 例如A字符串为ABCABBA,B字符串为CBABAC可以得到下图m*n的二维数组,定义原点为(0,0)，
// 终点为(m,n)水平与垂直的每一条边距离为1，映射成坐标系如下图。
// 从原点(0,0)到(0,A)为水平边，距离为1,从(0,A)到(A,()为垂直边,距离为1;
// 假没两个字符中同一位置的两个字符相同则可以作一个斜边,如(A,C)到(B8,B)最短距离为斜边，距离同样为1。
// 作出所有的斜边如下图 ，(0,0)到(B,B)的距离为 1个水平边 + 1个垂直边 + 1个斜边 = 3.
// 200 分的
function main(a, b) {
    let A = a
    let B = b


    let results = new Array(B.length + 1).fill(0).map(() => new Array(A.length + 1));

    for (let i = 0; i <results.length; i++) {
        results[i][0] = i;
    }
    for (let i = 0; i < A.length + 1; i++) {
        results[0][i] = i;
    }
    for (let i = 1; i < results.length; i++) {
        for (let j = 1; j < results[i].length ; j++) {
            // if (B[i-1] == A[j-1]) {
            if (B.charAt(i-1) == A.charAt(j-1)) {
                results[i][j] = Math.min(
                                    results[i-1][j-1],
                                    Math.min(results[i - 1][j], results[i][j - 1])
                                )+1;
            } else {
                results[i][j] = Math.min(results[i - 1][j], results[i][j - 1])+1;
            }
        }
    }
    console.log(results[B.length][A.length]);
}

main('ABC', 'ABC')
main('ABCABBA', 'CBABAC')