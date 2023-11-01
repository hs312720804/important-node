const fs = require('fs')

fs.readFile('./demo.txt', 'utf-8', (err, data) => {
  console.log(err)
  console.log(data)
  console.log(data)
})