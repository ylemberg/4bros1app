let mongoose = require('mongoose')
let db = require('../db.js')

let movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
  	type: String,
  	required: true,
  	default: 'N/A'
  },
  director: {
    type: [String]
  },
  actors: {
    type: [String]
  },
  poster: {
  	type: String,
    default: 'http://content.mycutegraphics.com/graphics/movie/movie-clapper-board.png'
  },
  thumbnail: {
  	type: String,
    default: 'http://content.mycutegraphics.com/graphics/movie/movie-clapper-board.png'
  },
  trailer: {
    type: String
  },
  genres: {
    type: [String]
  },
  rottenTomatoes: {
    type: Number
  },
  IMDB: {
    type: Number
  },
  metaCritic: {
    type: Number
  },
  netflix: {
    type: Boolean,
    default: false
  },
  hulu: {
    type: Boolean,
    default: false
  },
  amazon: {
    type: Boolean,
    default: false
  },
  HBO: {
    type: Boolean,
    default: false
  },
  MPAA: {
    type: String,
    default: 'NR'
  },
  runtime: {
    type: Number
  },
  seasons: {
    type: Number
  },
  year: {
    type: Number
  },
  keywords: {
    type: [String]
  },
  clicked: {
    type: Number,
  	default: 0
  },
  saved: {
  	type: Number,
  	default: 0
  },
  guideboxID: {
    type: Number
  },
  imdbID: {
    type: String
  }
})

// possible movieSchema method that will iterate clicked/saved when called

let Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
