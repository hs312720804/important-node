var Websocket = require( 'websocket').server
var http = require('http')

var httpServer = http.createServer().listen(8080,function() {
  console.log('http://127.0.0.1:8080')
})

var wsServer = new Websocket({
  httpServer: httpServer,
  autoAcceptConnections: false
})

let conArr = []
wsServer.on('request',function(request){
  var connection = request.accept()
  conArr.push(connection)
  connection.on('message', function(msg){
    console.log(msg)
    for(let item of conArr) {
      item.send(msg.utf8Data)
    }
  })
})