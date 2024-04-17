// function getParams (url, key) {
//   const res = {}
//   if (url.includes('?')) {
//     const str = url.split('?')[1]
//     const arr = str.split('&')
//     arr.forEach(item => {
//       const k = item.split('=')[0]
//       const val = item.split('=')[1]
//       const keyVal =  res[k]
//       res[k] = keyVal ? [keyVal, decodeURIComponent(val)]: decodeURIComponent(val)
//     // 解码
//     })
//   } 
//   return res[key] || null

// } 
// // 测试
// const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16&age=18', 'ag1e')
// console.log(user)


// 使用虚拟列表：只对可见区域进行渲染，对非可见区域中的数据不渲染或部分渲染的技术，从而达到极高的渲染性能。
// 1.对组件属性itemSize进行扩展，支持传递类型为数字、数组、函数
// 2.以预估高度先行渲染，然后获取真实高度并缓存。
// 3.可以使用IntersectionObserver替换监听scroll事件，IntersectionObserver可以监听目标元素是否出现在可视区域内，在监听的回调事件中执行可视区域数据的更新，并且IntersectionObserver的监听回调是异步触发，不随着目标元素的滚动而触发，性能消耗极低。

// function findMinCycle(str) {
//   if (str.length === 0) return "";
 
//   for (let i = 1; i < str.length; i++) {
//     if (str.length % i === 0) {
//       let sub = str.substring(0, i);
//       if (str.repeat(2).includes(sub)) {
//         return sub;
//       }
//     }
//   }
//   return "";
// }
// console.log(findMinCycle('cabca'))


