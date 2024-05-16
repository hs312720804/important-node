function a (line) {
    const code = line.match(/[A-Za-z]/g)
    const num = line.match(/[0-9]/g)
    const len = line.length
    if (len === 0 || (code && len === code.length) || (num && len === num.length)) {
        console.log(-1)
        return
    }
    const str = line
    const arr = str.split('')
    let start = 0
    let max = 0
    let curMax= 0
    let hasCode = false
    // 如果有字母，那么遇到下一个字母就清空
    // 如果没有字母，++
    while (start < arr.length) {
        if (hasCode) {
            if (arr[start].match(/[A-Za-z]/g)) {
                hasCode = true
                max = Math.max(max, curMax)
            } 
            curMax = 1
        } else {
            curMax++
            if (arr[start].match(/[A-Za-z]/g)) {
                max = Math.max(max, curMax)
                curMax = 1
            } 
            
            hasCode = false
            
        }
        start++
    }
    
    console.log(max+1)
}
// a('a5')
// a('aBB9')
// a('abC124ACb')
// a('abcdef')
// a('121212')
// a('12A12B')
a('121A212')