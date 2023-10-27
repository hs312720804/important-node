const objectTag = '[object Object]'
const arrayTag = '[object Array]'
const mapTag = '[object Map]'
const setTag = '[object Set]'


const stringTag = '[object String]'
const numberTag = '[object Number]'
const booleanTag = '[object Boolean]'
const symbolTag = '[object Symbol]'
const dateTag = '[object Date]'
const regExpTag = '[object RegExp]'
const functionTag = '[object Function]'

const deepTag = [objectTag, arrayTag, mapTag, setTag]
function getType(target) {
  return Object.prototype.toString.call(target)
}

function isObject (target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function initObject (target) {
  const Ctor = target.constructor
  return new Ctor()
}

function clone (target, map = new WeakMap()) {
  if (!isObject(target)) {
    return target
  }

  const type = getType(target)
  let deepTarget

  if (deepTag.includes(type)) {
    deepTarget = initObject(target)
  } else {
    // 特殊处理
  }

  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, deepTarget)

  if(type === mapTag) {
    target.forEach((value, key) => {
      deepTarget.set(key, clone(value, map))
    });
    return deepTarget
  }
  if(type === setTag) {
    target.forEach((value) => {
      deepTarget.add(clone(value, map))
    });
    return deepTarget
  }

  // Object Array
  const keys  = type === arrayTag ? undefined : Object.keys(target)

  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }

    deepTarget[key] = clone(target[key], map)
  })
  return deepTarget

}

function forEach (target, func) {
  let i = -1
  while(++i < target.length) {
    func(target[i], i)
  }
}

const aaa = {
  a:1, 
  b: {
    a: 1,
    c: new Map(),
    d: new Set(),
    e: new Date(),
    f: function () {console.log(123)},
    g: /\w*$/
  }
}
// const bbb = clone(aaa)
// console.log(bbb)
// aaa.b.a = 22
// aaa.b.c.set(1, 22)
// aaa.b.d.add(1)
// console.log(aaa === bbb)
// console.log(aaa)


// const s = Symbol(124)
// const s1 = clone(s)
// console.log(s)
// console.log(s === s1)
// console.log(s1)
// console.log(typeof s1)

// const process = require('process')
// console.log(process.memoryUsage())

const isGlobalStrictMode = (function () {
  return !this
}())

console.log(isGlobalStrictMode)
