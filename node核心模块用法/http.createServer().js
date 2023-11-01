const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  res.setHeader('content-type', 'text-html; charset=utf-8')
  res.end('hello boy')
})

server.listen(8080, () => {
  console.log('服务已经启动')
})