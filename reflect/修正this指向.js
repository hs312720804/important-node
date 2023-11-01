// 作者：L_J_K
// 链接：https://juejin.cn/post/7222460499493011515
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const parent = {
    a: 1,
    get value() {
      console.log(this === child); // false
      return this.a;
    },
  };
  const handler = {
    get: function (obj, prop, receiver) {
      return obj[prop];
    },
    set: function (obj, prop, value, receiver) {
      obj[prop] = value;
      return true;
    },
  };
  
  const proxyObj = new Proxy(parent, handler);
  const child = Object.setPrototypeOf({ a: 2 }, proxyObj);
  child.value; // 1
  
  
//   这就有问题了，输出的结果都和期望的不一样了，this应该指向child,但指向了parent
  
// Reflect上场

// 要是Reflect.get(obj, prop)换成obj[prop]，这等于没换，意义和结果是一样的，这不是还有一个receiver参数没有用嘛

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
  
//   this指向正确，结果也当然和期望一致，receiver的不是指代理对象，也不是指原对象，而是执行上下文（有句话是这么说的，不用特定方式改变this的情况下，谁调用指向谁，这就是期望的），这里child调用的value所以期望的指向应该是child, 这里你可能想到直接用receiver[prop]不行了，这样会出现执行溢出，receiver[prop]相当于child.value，child.value还没执行完，receiver[prop]又执行了，就会无限在执行


//   Reflect.get(target, key, receiver)中的receiver参数修改了this指向，不加this指向target, 加了后指向receiver
  
  
//   代理对象中有用到this时一定要用到Reflect，这样才能得到一直符合期望的值
  
 