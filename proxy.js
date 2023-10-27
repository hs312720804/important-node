const parent = {
  a: 1,
  get value() {
    console.log(this === child); // true
    return this.a;
  },
};
const handler = {
  get: function (obj, prop, receiver) {
    Reflect.get(obj, prop)
    //  - return obj[prop];
    return Reflect.get(obj, prop, receiver)
  },
  set: function (obj, prop, value, receiver) {
    //  - obj[prop] = value;
    Reflect.get(obj, prop, value, receiver)
    return true;
  },
};
 
const proxyObj = new Proxy(parent, handler);
const child = Object.setPrototypeOf({ a: 2 }, proxyObj);
child.value; // 2