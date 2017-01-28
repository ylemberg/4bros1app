// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let savedMovies = (req, res) => {
  User.findOne({ email: req.headers.user })
  .then(function(resp){
    res.status(200).send(resp.saved)
  })
  .catch(function(err){
    console.log('error is', err)
  })
}

module.exports = savedMovies
