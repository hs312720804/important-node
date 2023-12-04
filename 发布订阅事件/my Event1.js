class Event {
  constructor () {
    this.eventList = {}
  }

  on (type, fn, once = false) {
    // if (this.eventList[type]) {
    //   this.eventList[type] = [fn]
    // } else {
    this.eventList[type] = [fn]
    // }

    fn.once = once
    
  }

  off (type, fn) {
    if (fn) {
      this.eventList[type] = this.eventList[type].filter(f => fn !== f)
    } else {
      this.eventList[type] = []
    }
  }

  trigger (type, eventData) {
    const fnList = this.eventList[type]
    fnList.forEach(f => {
      f(eventData)
      if (f.once) {
        this.off(type, f)
      }
    });
  }

  once (type, fn) {
    this.on(type, fn, true)
  }
}


let e = new Event;
e.on("click", () => {
    console.log(1);
})
e.on("click", () => {
    console.log(2);
})
function fn3(a) {
    console.log(a);
}
e.on("click", fn3);


e.trigger('click', 123)
e.trigger('click', 456)
console.log(e);