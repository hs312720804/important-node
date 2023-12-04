function myPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error('请传入数组'))
    }

    let res = []
    let count = 0

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(data => {
        count++
        res[i] = data

        if (count === arr.length) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const path = require('path')
const process = require('process')

console.log(path.resolve(__dirname, '../dist'))
console.log(path.resolve(__dirname, 'dist'))
console.log(path.resolve(__dirname))
console.log(process.cwd())