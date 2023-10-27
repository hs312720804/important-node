function PromiseAll(promiseArray) {    //返回一个Promise对象
  return new Promise((resolve, reject) => {
  
     if (!Array.isArray(promiseArray)) {                        //传入的参数是否为数组
         return reject(new Error('传入的参数不是数组！'))
     }

     const res = []
     let counter = 0                         //设置一个计数器
     for (let i = 0; i < promiseArray.length; i++) {
         Promise.resolve(promiseArray[i]).then(value => {
            counter++                  //使用计数器返回 必须使用 counter
            res[i] = value
            if (counter === promiseArray.length) {
                resolve(res)
            }
         }).catch(e => reject(e))
     }
 })
}

// 作者：学不完的前端_卷它
// 链接：https://juejin.cn/post/6988740933885886472
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
