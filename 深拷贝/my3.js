const mapType = '[object Map]'
const setType = '[object Set]'
const objectType = '[object Object]'
const arrayType = '[object Array]'

const numberType = '[object Number]'
const stringType = '[object String]'
const boolType = '[object Boolean]'

const symbolType = '[object Symbol]'
const timeType = '[object Time]'
const regExpType = '[object RegExp]'
const functionType = '[object Function]'

const deepType = [mapType, setType, objectType, arrayType]

function getType (target) {
  return Object.prototype.toString.call(target)
}

function isObject (target) {
  return target !== null && (typeof target === 'object' || typeof target === 'function')
}
function initTarget (target) {
  const Ctor = target.constructor
  return new Ctor()
}

function deepClone (target) {
  
  if (!isObject(target)) {
    return target
  }

  const type = getType(target)
  
  if (deepType.includes(type)) {
    
  }

}