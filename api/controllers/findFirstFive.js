// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let findFirstFive = (req, res) => {
  Movie.find({})
  .then(function(resp){
    res.status(200).send([resp[0],resp[1],resp[2], resp[3], resp[4]])
  })
  .catch(function(err){
    console.log('error is', err)
  })
}

module.exports = findFirstFive
