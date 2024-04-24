function a (m, n, k) {
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let arr = i.toString().split('').concat(j.toString().split(''))
            let num = arr.reduce((total, item) => {
                total += parseInt(item)
                return total
            }, 0)

            if (num <= k) {
                res++
            }
        }
    }

    console.log(res)
}

a(40,40,18)