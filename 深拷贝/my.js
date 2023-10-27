// 可继续遍历
const ArrayTag = '[object Array]'
const ObjectapTag = '[object Object]'
const SetTag = '[object Set]'
const MapTag = '[object Map]'

// 不可继续遍历
const NumberTag = '[object Number]'
const StringTag = '[object String]'
const BooleanTag = '[object Boolean]'

const DateTag = '[object Date]'
const FunctionTag = '[object Function]'
const RegexpTag = '[object RegExp]' // 正則

const deepType = [ArrayTag, ObjectapTag, SetTag, MapTag]

function getType (targe) {
  return Object.prototype.toString.call(targe)
}
function isObject(targe) {
  const type = typeof targe
  return targe !== null && (type === 'object' || type === 'function')
}
function getInit (targe) {
  const Ctor = targe.constructor
  return new Ctor()
}
function clone (target, map=new WeakMap()) {

  // 如果是基本类型的，直接返回
  if (!isObject(target)) {
    return target
  }

  let cloneTarget 

  const type = getType(target)
  // 判断是否为可继续遍历的类型
  if (deepType.includes(type)) {
    // 初始化
    cloneTarget = getInit(target)
  } else {
    // 特殊处理
  }
  if (map.has(target)) {
    return map.get(target)
  } else {
    map.set(target, cloneTarget)
  }

  // set 类型
  if (type === SetTag) {
    target.forEach((value, key) => {
      cloneTarget.add(clone(value))
    });
    return cloneTarget;
  }
  // map 类型
  if (type === MapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value))
    })
    return cloneTarget;
  }
  // array 和 object 类型
  const keys = Array.isArray(target) ? undefined : Object.keys(target)


  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    cloneTarget[key] = clone(target[key], map)
  })
  return cloneTarget
}

function forEach (array, func) {
  let i = -1
  while (++i < array.length) {
    func(array[i], i)
  }

  // return array
}

let aaa = Symbol(12314)
const bbb = clone(aaa)
console.log('bbb-->', bbb)
aaa = 22
console.log(aaa === bbb)
console.log('aaa-->', aaa)