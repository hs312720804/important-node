function throttle (fn, delay) {
  let time = 0
  return () => {
    let time2 = new Date() 
    if (time2 - time > delay) {
      fn.call(this, ...arguments)
      time = time2
    }
  }
}

function debounce (fn, delay) {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...arguments)
    },delay)
  }
}

function myInstanceOf (obj, constructor) {
  const proto = Object.getPrototypeOf(obj)

  while (true) {
    if (proto === constructor.prototype) {
      return true
    }

    proto = Object.getPrototypeOf(proto)
  }
}


function myCall (obj, ...arr) {
  let newObj = obj || window
  newObj.fn = this
  const res = newObj.fn(...arr)

  delete newObj.fn
  return res
}


const mapType = '[object Map]'
const setType = '[object Set]'
const objectType = '[object Object]'
const arrayType = '[object Array]'

const stringType = '[object String]'
const numberType = '[object Number]'
const booleanType = '[object Boolean]'
const dateType = '[object Date]'
const regExpType = '[object RegExp]'
const functionType = '[object Function]'

const deepType = [mapType, setType, objectType,arrayType]
function isObject (target) {
  const type = typeof target
  return type !== null && (type === 'object' || type === 'function')
}

function getType (target) {
  return Object.prototype.toString.call(target)
}

function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}

function deepClone (target) {
  if (!isObject(target)) {
    return target
  }

  const type = getType(target)
  let deepTarget

  let map = new Map()
  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, deepTarget)

  if (deepType.includes(type)) {
    deepTarget = getInit(target)
  }  else {
    // 特殊處理
  }

  if (type === mapType) {
    target.forEach((item, key) => {
      deepTarget.set(key, deepClone(item))
    })
    return deepTarget
  }
  if (type === setType) {
    target.forEach((item, key) => {
      deepTarget.add(deepClone(item))
    })
    return deepTarget
  }

  const keys = type === arrayType ? target : Object.key(target)

  forEach(keys, (key, value) => {
    if (type === objectType) key = value
    deepTarget[key] = deepClone(target[key])
  }) 
  return deepTarget
}

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(i, arr[i])
  }
}


class MyPromise  {
  static pending = 'PENDING'
  static fulfilled = 'FULFILLED'
  static rejected = 'REJECTED'
  constructor (fn) {
    this.status = MyPromise.pending
    this.value = ''
    this.fullArr = []
    this.rejectedArr = []
    fn(this.resolve.bind(this), this.rejected.bind(this))
  }

  resolve (data) {
    setTimeout(() => {
      if (this.status === MyPromise.pending) {
        this.value = data
        this.status = MyPromise.fulfilled
  
        this.fullArr.forEach(fn => fn(this.value))
      }
    })
  }
  rejected (data) {
    setTimeout(() => {

      if (this.status === MyPromise.pending) {
        this.value = data
        this.status = rejected
        this.rejectedArr.forEach(fn => fn(this.value))
      }
    })
  }

  then (fulfilledFunc, rejectedFunc) {
    if (this.status === MyPromise.fulfilled) {
      setTimeout(() => {
        fulfilledFunc(this.value)
      })
    }
    if (this.status === rejected) {
      setTimeout(() => {
        rejectedFunc(this.value)
      })
    }

    if (this.status === pending) {
      fulfilledFunc && this.fullArr.push(fulfilledFunc)
      rejectedFunc && this.rejectedArr.push(rejectedFunc)
    }
    return this
  }

}
