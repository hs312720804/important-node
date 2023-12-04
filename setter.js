const parent = {
  a: 1,
  get value() {
    console.log(this === parent); // false
    return this.a;
  },
  set value(value) {
    this.a = value
  },
};
const handler = {
  get: function (obj, prop, receiver) {
    // return obj[prop];
      return Reflect.get(obj, prop)
  },
  set: function (obj, prop, value, receiver) {
    // Reflect.set(obj, prop, value, receiver)
    // return true;
  },
};

const proxyObj = new Proxy(parent, handler);
const child = Object.setPrototypeOf({ a: 2 }, proxyObj);
child.value; // 1
child.value = 222
console.log(child)