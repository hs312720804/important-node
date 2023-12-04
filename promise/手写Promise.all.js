function PromiseAll (arr) {
  if (!Array.isArray(arr)) {
    return console.log('请输入数组')
  }
  return new Promise((resolve, reject) => {
    let res = []
    let counter = 0
    
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(data => {
        counter++
        res[i] = data

        if (counter === arr.length) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const a1 = Promise.resolve(1)
const a2 = Promise.reject(2)

const aa = PromiseAll([a1, a2]).then(res => {

  console.log('aa->', res)
}).catch(err => {
  console.log('err->', err)

})



Promise.resolve(Promise.reject(2)).then(data => {
  counter++
  res[i] = data

  if (counter === arr.length) {
    console.log('res--->',res)
  }
}).catch(err => {
  console.log('err-->',err)
})
