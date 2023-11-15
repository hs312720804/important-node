function myInstanceof (obj, constructor) {
  let proto = Object.getPrototypeOf(obj)
  
  while(true) {
    if (proto === null) {
      return false
    } 
    if (proto === constructor.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}