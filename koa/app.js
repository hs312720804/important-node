const Koa = require('koa')

const app = new Koa()

// 中间件1
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const delta = new Date() -start
  console.log(`请求耗时：${delta} ms`)
  console.log('拿到上一次请求的结果：', ctx.state.baiduHTML)
})

// 中间件2
app.use(async (ctx, next) => {
  // console.log('ctx', ctx)
  const axios = require('axios')
  ctx.state.baiduHTML = await axios.get('https://baidu.com')
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})