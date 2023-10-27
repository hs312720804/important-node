var {createServer} = require('http')
const {Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  // ...
  socket.on('sendMsg', (data) => {
    console.log(data)
    io.emit('pushMsg', data)
  })
})

httpServer.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})