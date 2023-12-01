// 并行
function parallelRun() {
  // 记录当前执行中的任务数量
  let cur = 0
  return run = (fnList, max) => {
    // console.log('--------------')
    // console.log(fnList)
    // console.log(fnList.length)
    while(fnList.length && cur < max) {
      const fn = fnList.shift()
      cur++
      Promise.resolve(fn()).finally(res => {
        cur--
        run(fnList, max)
      })
    }
  }
}

const arr = []

for (let i = 0; i < 10; i++) {
  arr.push(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log('done', i)
      resolve()
    }, 100 * i)
  }))
};

parallelRun()(arr, 6)