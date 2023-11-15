setTimeout(() => {
  console.log('timeout1')
    Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0);
setTimeout(() => {
  console.log('timeout2')
    Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0);
