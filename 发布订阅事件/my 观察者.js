// 订阅者
class Dep {
  constructor (name, value) {
    this.deps = []
    this.name = name
    this.value = value
  }
  collect (watcher) {
    this.deps.push(watcher)
  }
  notify (newName, newVal) {
    // this.name = newName
    // this.value = newVal
    this.deps.forEach(w => w.update())
  }
}

// 观察者
class Watcher {
  constructor () {
  }
  update(student) {
    console.log('student更新了')
    // console.log(`学生${student.name}的年龄是${student.value}`)
  }
  
}

const student = new Dep('小米', 18)
let parent = new Watcher()
let teacher = new Watcher()
student.collect(parent)
student.collect(teacher)

student.notify('小莫', 22)
student.notify('小莫', 23)
student.notify('小莫', 23)