const mapType = '[object Map]'
const setType = '[object Set]'
const objectType = '[object Object]'
const arrayType = '[object Array]'
const argumentsType = '[object Arguments]'

const stringType = '[object String]'
const NumberType = '[object Number]'
const boolType = '[object Boolean]'

const timeType = '[object time]'
const regExpType = '[object RegExp]'
const functionType = '[object Function]'

const deepType = [mapType, setType, objectType, arrayType, argumentsType]

function isObject(target) {
  return target !== null && (typeof target === 'function' || typeof target === 'object' )
}

function getType (target) {
  return Object.prototype.toString.call(target)
}

function getInit (target) {
  const Ctor = target.constructor
  return new Ctor()
}

function deepClone (target, map = new WeakMap()) {
  if (!isObject(target)) {
    return target
  }

  let type = getType(target)
  let res

  if (deepType.includes(type)) {
    res = getInit(target)
  } else {
    // 处理特殊类型
  }

  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, res)
  if (type === mapType) {
    target.forEach((item, key) => {
      res.set(key, deepClone(item, map))
    });
    return 
  }
  if (type === setType) {
    target.forEach((item, key) => {
      res.add(deepClone(item, map))
    });
    return
  }

  const keys = type === arrayType ? undefined : Object.keys(target)

  forEach(keys|| target, (item, key) => {
    if (type === objectType) key = item
    res[key] = deepClone(target[key], map) 
  })

  return res

}

function forEach(arr, cb) {
  arr.forEach((item, key) => {
    cb(item, key)
  })
}

const a = {
  a: {aa: {bb:1}},
  b: 2
}

console.log('deep->', deepClone(a))

a.a.aa = 2
console.log('a=>', a)
