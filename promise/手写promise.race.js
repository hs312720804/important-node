// 作者：滑稽鸭
// 链接：https://juejin.cn/post/7069805387490263047
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 这里不需要使用索引，只要能循环出每一项就行
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
  })
}

