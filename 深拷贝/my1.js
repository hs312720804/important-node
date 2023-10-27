// 可继续遍历
const objectTag = '[object Object]'
const arrayTag = '[object Array]'
const mapTag = '[object Map]'
const setTag = '[object Set]'

// 不可遍历
const stringTag = '[object String]'
const numberTag = '[object Number]'
const booleanTag = '[object Boolean]'
const symbolTag = '[object Symbol]'

// 特殊
const functionTag = '[object Function]' 
const dateTag = '[object Date]'
const regExpTag = '[object RegExp]'

const deepType = [objectTag, arrayTag, mapTag, setTag]

function getType(target) {
  return Object.prototype.toString.call(target)
}

function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function initObject (target) {
  const Ctor = target.constructor

  return new Ctor()
}

function clone (target, map = new WeakMap()) {
  if (!isObject(target) ) {
    return target
  }
  const type = getType(target)
  let deepTarget

  if (deepType.includes(type)) {
    deepTarget = initObject(target)
  } else {
    // 特殊处理
    console.log('target', target)
  }

  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, deepTarget)
  

  if (type === setTag) {
    target.forEach((value, key) => {
      deepTarget.add(clone(value,map))
    });
    return deepTarget
  }
  if (type === mapTag) {
    target.forEach((value, key) => {
      deepTarget.set(key, clone(value))
    });
    return deepTarget
  }
  // 处理 object array
  const keys = Array.isArray(target) ? undefined : Object.keys(target)

  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    deepTarget[key] = clone(target[key], map)
  })

  return deepTarget
}

function forEach (array, func) {
  let i = -1
  while (++i < array.length) {
    func(array[i], i)
  }
}


const aaa = {
  a:1, 
  b: {
    a: 1,
    c: new Map(),
    d: new Set(),
    e: new Date()
  }
}
const bbb = clone(aaa)
console.log(bbb)
aaa.b.a = 22
aaa.b.c.set(1, 22)
aaa.b.d.add(1)
console.log(aaa === bbb)
console.log(aaa)

