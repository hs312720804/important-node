// 不会

function a (str, arr) {
    str = str.replace(/[,.;]/g, '')
    // let obj = {}
    // for (let i = 0; i < str.length; i++) {
    //     obj[str[i]] = i
    // }

    str = str.split('')
    let arr2 = arr.sort((a,b) => {
        const arrA = a.split('')
        const arrB = B.split('')
        let totalA = getSort(arrA)
        let totalB = getSort(arrB)
        return 
    })
    function getSort (itemArr) {
        return itemArr.reduce((total, current) => {
            const i = str.findIndex((strItem) => strItem === current)
            total += i
            return total
        }, 0)
    }
    // 字典

    let left = 0
    let right = 1
    let res = []
    while (left < str.length && left < str.length) {
        const a = str.slice(left, right)
        const index = arr2.findIndex((item) => item === a)
        if (index > 0) {
            arr2.splice(index, 1)
            left = index
            right = index+1
            res.push(a)
        }
        right++
    }
    console.log(res)

}

a('ilovechina', ['i', 'love', 'china', 'ch', 'na', 've', 'lo', 'this', 'is', 'the', 'word'])