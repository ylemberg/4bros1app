// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let sortByGenre = (req, res) => {
	let genre = req.headers.genre
	console.log('you asked to find movies with genre:', genre)
  if(genre === 'Indifferent') {
    Movie.find({})
    .then(function(resp){
      res.status(200).send(resp)
    })
    .catch(function(err){
      res.status(500).send(err)
      console.log('error is', err)
    })
  } else {
    Movie.find({ genres: genre })
    .then(function(resp){
      res.status(200).send(resp)
    })
    .catch(function(err){
    	res.status(500).send(err)
      console.log('error is', err)
    })
  }
}

module.exports = sortByGenre
