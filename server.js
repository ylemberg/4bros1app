const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./api/routes/routes.js')
const cors = require('cors');
const Router = require('react-router')
const session = require('express-session');

const port = 3000
const app = express()
app.use(function (req, res, next) {
  console.log(req.method, req.url)
  next()
})

app.use(session({ 
  secret: 'movief1ck',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 6000000 }
}));

app.use(express.static(path.join(__dirname + '/public')))

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })




// app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', routes)

app.get('*', function (request, response){
  //response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  response.redirect('/');
})




//start the server
app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
