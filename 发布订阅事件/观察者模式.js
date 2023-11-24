// 作者：hello_world_1024
// 链接：https://juejin.cn/post/7204854015464341560

class Dep { // 被观察者 学生
  constructor(name) {
    this.state = 'happy'
    this.observers = []; // 存储所有的观察者
  }
  // 收集所有的观察者
  attach(o){ // Dep. prototype. attch
    this.observers.push(o)
  }
  // 更新被观察者 状态的方法
  notify(newState) {
    this.state = newState; // 更新状态
    // this 指被观察者 学生
    // 通知观察者 更新它们的状态
    this.observers.forEach(o => o.update(this)) 
  }
}

class Watcher{ // 观察者 父母和老师
  constructor(name) {
    this.name = name
  }
  update(student) {
    console.log('当前' + this.name + '被通知了', '当前学生的状态是' + student.state)
  }
}

let student = new Dep('学生'); 

let parent = new Watcher('父母'); 
let teacher = new Watcher('老师'); 

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent); 
student.attach(teacher); 
student.notify('被欺负了');

