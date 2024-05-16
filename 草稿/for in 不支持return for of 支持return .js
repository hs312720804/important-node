function a () {
    let arr = [1,2,3]
    for (let i of arr) {
        if (i === 1) {
            return i
        }
    }
}

function b () {
    let arr = {a:1, b:2, c: 3}
    for (let i in arr) {
        if (i === 1) {
            return i
        }
    }
}

// console.log(a())
console.log(b())