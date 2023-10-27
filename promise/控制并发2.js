const sendRequest = (tasks, max, callBack) => {
  let index = 0;
  let together = new Array(max).fill(null);
  const result = [];

  together = together.map(() => {
    return new Promise((resolve) => {
      const run = () => {
        if (index >= tasks.length) {
          resolve();
          return;
        }
        let cur = index;
        let task = tasks[index++];
        task().then((res) => {
          result[cur] = res;
          run();
        }).catch((err) => {
          result[cur] = err;
          run();
          // reject(err);
        })
      }
      run()
    })
  })
  Promise.all(together).then(() => callBack(result));
}

const urls = [];
// for (let i = 1; i <= 20; i++) {
//     urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
// }
// concurrencyRequest(urls, 2).then(res => {
//     console.log(res);
// })

sendRequest(urls, 2, (res) => {
  console.log(res)
})