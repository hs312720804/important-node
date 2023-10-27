const arr = []

for (let i = 0; i < 10; i++) {
  arr.push(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log('done', i)
      resolve()
    }, 100 * i)
  }))
};
// 通过递归实现
const parallelRun = () => {
  const runingTask = new Map()

  const inqueue = (totalTask, max) => {
    while (runingTask.size < max && totalTask.length) {
      const newTask = totalTask.shift()
      const tempName = totalTask.length
      runingTask.set(tempName, newTask)

      console.log('totalTask-->', totalTask)
      // console.log('tempName-->', tempName)

      newTask().finally(() => {
        runingTask.delete(tempName)
        inqueue(totalTask, max)
      })
    }
  }

  return inqueue
}

parallelRun()(arr, 6)

// https://juejin.cn/post/7249943229289103418

