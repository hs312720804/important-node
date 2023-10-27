// 节流
function throttle (fn, time) {
  let time1 = 0
  return () => {
    let time2 = new Date()
    if (time2-time1 > time) {
      fn.apply(this, arguments)
      time1 = time2
    }
  }
}
// 防抖
function debounce (fn, time) {
  let timer
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}
function test () {
  // setInterval(() => {
    console.log(new.target)
    let t = new Date().getTime()
    console.log('1--', t)
  // }, 1000)
}

const copyfn = debounce(test, 5000)
// console.log(copyfn)
setTimeout(() => {
  // console.log(new.target)
  // let t = new Date().getTime()
  // console.log(t)
  copyfn()
}, 1000)

setTimeout(() => {
  // console.log(new.target)
  // let t = new Date().getTime()
  // console.log(t)
  copyfn()
}, 2000)

setTimeout(() => {
  // console.log(new.target)
  // let t = new Date().getTime()
  // console.log(t)
  copyfn()
}, 6000)

