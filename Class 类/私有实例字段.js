// 私有字段只能在类的主体中访问
class User {
  #name; 
  name1 = 1231
  constructor(name) {
    this.#name = name; 
  } 
  getName() {
    return this.#name; 
  } 
} 

const user = new User('前端小智')
user.getName() // => '前端小智'
// user.#name  // 抛出语法错误
