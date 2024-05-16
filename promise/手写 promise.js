class MyPromise {
  static PENDING = 'pending'
  static RESOLVED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(fn) {
    this.result = ''
    this.status = MyPromise.PENDING
    this.resloveCallbacks = []
    this.rejectCallbacks = []
    fn(this.reslove.bind(this), this.reject.bind(this))
  }
  reslove(result) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.RESOLVED
        this.result = result
        this.resloveCallbacks.forEach(cb => {
          cb(result)
        })
      }
    });
  }
  reject(result) {
    setTimeout(( ) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED
        this.result = result
        this.rejectCallbacks.forEach(cb => {
          cb(result)
        })
      }
    })
  }

  then(onFULFILLED, onREJECTED) {
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {}
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {}

    if (this.status ===  MyPromise.PENDING) {
      this.resloveCallbacks.push(onFULFILLED)
      this.rejectCallbacks.push(onREJECTED)
      
    }

    if (this.status ===  MyPromise.RESOLVED) {
      setTimeout(() => {
        onFULFILLED(this.result)
      })
      
    }

    if (this.status ===  MyPromise.REJECTED) {
      setTimeout(() => {
        onREJECTED(this.result)
      }) 
    }

    return this
  }
}

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


