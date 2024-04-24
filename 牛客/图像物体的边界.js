// from https://blog.csdn.net/yeah_you_are/article/details/126203439
function put(i, j, array, pixel, target, recursion) {
    //遍历上、中、下
    for (let a=-1;a<=1;a++){
        //遍历左、中、右
        for (let b=-1;b<=1;b++) {
            //确保数组下标不越界，并且数组当前位置的值为指定像素值pixel
            if (i+a < array.length && i+a >= 0 &&
            j+b < array[0].length && j+b >= 0 &&
            array[i+a][j+b] == pixel) {
                array[i+a][j+b] = target;
                //递归
                if (recursion) {
                    // turnZero(i, j + 1, grid)
                    // turnZero(i, j - 1, grid)
                    // turnZero(i + 1, j, grid)
                    // turnZero(i - 1, j, grid)
                    put(i+a, j+b, array, pixel, target, true);
                }
            }
        }
    }
}


function main() {
    //初始化数组
    let a = new Array(6).fill(1).map(() => new Array(6).fill(0))

    for (let i=0;i<a.length;i++) {
        for (let j=0;j<a[0].length;j++){
            a[i][j] = 1;
        }
    }
    a[1][1] = 5;
    // a[4][4] = 5;
    a[5][5] = 5;
    
    //标记像素5的边界，用2标记
    for (let i=0;i<a.length;i++) {
        for (let j=0;j<a[0].length;j++){
            if (a[i][j] == 5)
                //调用put方法标记边界
                put(i,j,a,1,2,false);
        }
    }
    console.log(a)
    //统计边界个数
    let count = 0;
    for (let i=0;i<a.length;i++) {
        for (let j=0;j<a[0].length;j++){
            //找到2的格子，并递归标记
            if (a[i][j] == 2) {
                put(i, j, a, 2, 3, true);
                count++;
            }
        }
    }
    // console.log(a)
    console.log("边界个数：" + count);
}

main()
