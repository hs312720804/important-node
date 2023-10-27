const {
  types: { isProxy },
} = require("util");

const o = {
    _a : 1,
    get a() {
        return this._a;
    },
    set a(v) {
        console.log('---- call set');
        this._a = v;
    }
};

const p = new Proxy(o, {
    get(target, key) {
      console.log('this-->', this )
      console.log('target-->', target)
        return target[key];
    },
    // 不实现等于取默认set的逻辑
    // set() {
    // }
});

// p.a = 2;
p.b = 3;
o.c = 4;
// console.log('o-->', o)
console.log(p.a);
// console.log(p, o, p == o , isProxy(p));
