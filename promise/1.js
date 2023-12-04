class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor (fn) {
    this.status = MyPromise.PENDING
    this.value = ''
    this.fulfilledCbs = []
    this.rejectedCbs = []
    fn(this.resolve.bind(this), this.rejected.bind(this))
  }

  resolve (value) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING  ) {
        this.status = MyPromise.FULFILLED
        this.value = value
        this.fulfilledCbs.forEach(cb => cb(value))
      }
    })
  }
  rejected (value) {
    setTimeout(() => {

      if (this.status === MyPromise.PENDING  ) {
        this.status = MyPromise.REJECTED
        this.value = value
        console.log(this.rejectedCbs)
        this.rejectedCbs.forEach(cb => cb(value))
      }
    })
  }
  then (onFULFILLED, onREJECTED) {
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {}
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {}
    setTimeout(() => {
      if (this.status === MyPromise.FULFILLED  ) {
        onFULFILLED(this.value)
      }
      if (this.status === MyPromise.REJECTED  ) {
        onREJECTED(this.value)
      }
      if (this.status === MyPromise.PENDING  ) {
        this.fulfilledCbs.push(onFULFILLED)
        this.rejectedCbs.push(onREJECTED)
      }
    }, 0);
    return this
  }

}

// const a = new MyPromise((reslove, reject) => {
//   reject(1)
// })
// a.then(data => {
//   console.log('a-->',data)
// })

// const b = new Promise((reslove, reject) => {
//   reject(1)
// })
// b.then(data => {
//   console.log('b-->',data)
// })


console.log('第 1 步')
const p = new MyPromise((resolve, reject) => {
  console.log('第 2 步')
  setTimeout(() => {
    resolve(1)
    console.log('第 4 步')

  }) 
})

p.then((res) => {
  console.log('res-->', res)
}, (err)=> {
console.log('err-->', err)
}).then((res) => {
console.log('res-->', res)
}, (err)=> {
console.log('err-->', err)
})

console.log('第 3 步')