
class LazyMan {
  task = []
  constructor (name) {
    console.log(`hi I am ${name}`)
    setTimeout(() => {
      this.next()
    })
  }
  next() {
    const fn = this.task.shift()
    fn && fn()
  }
  eat (value) {
    const fn = () => {
      console.log(`I am eat ${value}`)
      this.next()
    }
    this.task.push(fn)
    return this
  }
  sleep (delay) {
    const fn = () => {
      setTimeout(() => {
        console.log(`waiting ${delay}s...`)
        this.next()
      }, delay * 1000)
    }
    this.task.push(fn)
    return this
  }

  sleepFirst (delay) {
    const fn = () => {
      setTimeout(() => {
        console.log(`waiting ${delay}s...`)
        this.next()
      }, delay * 1000)
    }
    this.task.unshift(fn)
    return this
  }
}

new LazyMan('hs').sleep(10).eat('milk').sleepFirst(5).eat('meat')