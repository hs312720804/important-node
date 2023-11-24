class Event {
  constructor() {
      this.handlers = {};//记录所有的事件以及处理函数
      /*
          {
              click:[fn1,fn2],
              mouseover: [fn3,fn4]
          }
      */
  }
  /**
   * on 添加事件监听
   * @param {事件类型} type 
   * @param {事件处理函数} handler 
   */
  on(type, handler, once = false) {
      if (!this.handlers[type]) {
          this.handlers[type] = [];
      }
      if (!this.handlers[type].includes(handler)) {
          this.handlers[type].push(handler);
          handler.once = once;
      }
  }
  /**
   * off  取消事件监听
   * @param {要取消的事件类型} type 
   * @param {要取消的事件函数，如果不传则清除所有} handler 
   */
  off(type, handler) {
      if (this.handlers[type]) {
          if (handler === undefined) {
              this.handlers[type] = [];
          } else {
              this.handlers[type] = this.handlers[type].filter(f => f != handler);
          }
      }
  }
  /**
   * trigger 执行函数
   * @param {要执行哪个类型的函数} type 
   * @param {事件对象} eventData 
   * @param {this执行} point 
   */
  trigger(type, eventData = {}, point = this) {
      if (this.handlers[type]) {
          this.handlers[type].forEach(f => {
              f.call(point, eventData);
              if (f.once) {
                  this.off(type, f);
              }
          });
      }
  }
  /**
   * once 只执行一次
   * @param {事件类型} type 
   * @param {要执行的函数} handler 
   */
  once(type, handler) {
      this.on(type, handler, true);
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