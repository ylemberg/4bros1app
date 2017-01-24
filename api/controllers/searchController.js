// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

var searchController = {}

searchController.byMovieTitle = (req, res) => {
  let query = req.headers.title.toLowerCase()

  Movie.find({title: query})
  .then(function (resp) {
    if (resp.length > 0) {
      console.log('found in database')
      res.status(200).send(resp)
    } else {
      let gb = {
        uri: 'http://api-public.guidebox.com/v2/search?type=movie&field=title&query=' + query,
        headers: {
          'User-Agent': 'Request-Promise',
          'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
        },
        json: true // Automatically parses the JSON string in the response
      }

      request(gb)
      .then(function (resp) {
        let gbID = resp.results[0].id
        gb.uri = 'http://api-public.guidebox.com/v2/movies/' + gbID
        request(gb)
      .then(function (resp) {
        var movieObj = {
          title: resp.title.toLowerCase(),
          description: resp.overview,
          poster: resp.poster_400x570,
          thumbnail: resp.poster_120x171,
          trailer: resp.trailers.web[0].embed,
          mpaa: resp.rating,
          runtime: resp.duration / 60,
          year: resp.release_year,
          guideboxId: resp.id,
          imdbId: resp.imdb
        }
        movieObj.directors = []
        for (let director of resp.directors) {
          movieObj.directors.push(director.name)
        }

        movieObj.actors = []
        for (let actor of resp.cast) {
          movieObj.actors.push(actor.name)
        }

        movieObj.genres = []
        for (let genre of resp.genres) {
          movieObj.genres.push(genre.title)
        }

        for (let sub of resp.tv_everywhere_web_sources) {
          if (sub.source === 'hbo') {
            movieObj.hbo = true
          }
        }
        for (let sub of resp.subscription_web_sources) {
          if (sub.source === 'netflix') {
            movieObj.netflix = true
          } else if (sub.source === 'amazon_prime') {
            movieObj.amazon = true
          } else if (sub.source === 'hulu_plus') {
            movieObj.hulu = true
          }
        }

        movieObj.keywords = []
        for (let keyword of resp.tags) {
          movieObj.keywords.push(keyword.tag)
        }

        let omdb = {
          uri: 'http://www.omdbapi.com/?i=' + movieObj.imdbId + '&tomatoes=true',
          headers: {
            'User-Agent': 'Request-Promise'
          },
          json: true // Automatically parses the JSON string in the response
        }
        request(omdb)
       .then(function (resp) {
         movieObj.rottenTomatoes = parseInt(resp.tomatoMeter, 10)
         movieObj.imdb = parseInt(resp.imdbRating, 10)
         movieObj.metaCritic = parseInt(resp.Metascore, 10)

         Movie.create(movieObj)
        .then(function (resp) {
          console.log('added to database')
          res.status(200).send(resp)
        })
       })
      })
      })
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}

module.exports = searchController
