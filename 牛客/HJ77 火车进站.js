function a () {
    const totalNum = 3
    
    let tokens = '1 2 3'.split(' ');
    let res = []
    // awitArr 等待的
    // inArr 已经进站的
    // outedArr 已经出站的
    function inout(awitArr, inArr, outedArr) {
        if ( outedArr.length === totalNum) {
            res.push([...outedArr])
        } else {
            if (awitArr.length) { // 进站
                
                inArr.push(awitArr.shift())
                inout(awitArr, inArr, outedArr)
                // 恢复
                awitArr.unshift(inArr.pop())
            }

            // 出站
            if (inArr.length) {
                outedArr.push(inArr.pop())
                inout(awitArr, inArr, outedArr)
                // 恢复
                inArr.push(outedArr.pop())
            }
        }

    }

    inout([...tokens], [], [])
    console.log(res)
}

a()