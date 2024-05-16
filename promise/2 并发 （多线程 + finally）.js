function parallelRun (tasks, nums) {
  let sussessList = []
  let errorList = []

  for (let i = 0; i < nums; i++) {
    run()
  }

  function run () {
    const task = tasks.shift()
    if (!task) return
    console.log('run->')
    task().then(res => {
      console.log(res)
      sussessList.push(res)
    }).catch((err) => {
      errorList.push(err)
    }).finally(() => {
      if (tasks.length !== 0) {
        run()
      }
    })
  }
  
}

let tasks = []
for (let i = 0; i < 100; i++) {
  tasks.push(
    () => 
    new Promise((reslove) => {
      reslove(i)
    })
    
  )
}
parallelRun(
  tasks,
  3
)
