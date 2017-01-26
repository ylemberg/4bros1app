let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let routes = require('./api/routes/routes.js')

let port = 3000
let app = express()
app.use(function (req, res, next) {
  console.log(req.method, req.url)
  next()
})

app.use(express.static(path.join(__dirname + '/public')))

// app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', routes)

//start the server
app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
