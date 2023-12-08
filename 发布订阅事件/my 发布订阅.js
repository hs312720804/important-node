class Event {
  constructor () {
    this.eventMap = {}
  }
  on (name, fn, once = false) {
    if (this.eventMap[name]) {
      this.eventMap[name].push(fn)
    } else {
      this.eventMap[name] = [fn]
    }
    fn.once = once;
  }
  off (name, fn) {
    if (fn) {
      this.eventMap[name].filters(item => item !== fn)
    } else {
      this.eventMap[name] = []
    }
  }
  trigger (name, data, _this) {
    this.eventMap[name].forEach(item => {
      item.call(_this, data)
      if (item.once) {
        this.off(name, item)
      }
    });
  }
  once (name, fn) {
    this.on(name, fn, true)
  }
}
let e = new Event;
e.on("click", () => {
    console.log(1);
})
e.on("click", () => {
    console.log(2);
})
function fn3() {
    console.log(3);
}
e.on("click", fn3);
e.trigger('click')
console.log(e);