let request = require('request-promise')
let Promise = require('bluebird')

// require db models
let Movie = require('../models/Movie.js')

let utils = {}

utils.addToDb = gbOptions => {
  return new Promise(function (resolve, reject) {
    request(gbOptions)
      .then(function (resp) {
        var movieObj = {
          title: resp.title.toLowerCase(),
          description: resp.overview,
          poster: resp.poster_400x570,
          thumbnail: resp.poster_120x171,
          mpaa: resp.rating,
          runtime: resp.duration / 60,
          year: resp.release_year,
          guideboxId: resp.id,
          imdbId: resp.imdb
        }
        if (resp.trailers.web.length > 0) {
          movieObj.trailer = resp.trailers.web[0].embed
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
        gbOptions.uri = 'http://api-public.guidebox.com/v2/movies/' + movieObj.guideboxId + '/images'

        request(gbOptions)
        .then(function (resp) {
          if (resp.results.banners) {
            movieObj.banner = resp.results.banners[0].xlarge.url
          } else {
            console.log('did not add banner')
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
            movieObj.imdb = parseFloat(resp.imdbRating)
            movieObj.metaCritic = parseInt(resp.Metascore, 10)
            if (resp.tomatoMeter === 'N/A') {
              movieObj.rottenTomatoes = null
            }
            if (resp.Metascore === 'N/A') {
              movieObj.metaCritic = null
            }
            if (resp.imdbRating === 'N/A') {
              movieObj.imdb = null
            }
            Movie.create(movieObj)
            .then(function (resp) {
              if (resp) {
                resolve(resp)
              }
            })
        .catch(error => {
          console.log('error in adding to db = ', error)
        })
          })
        })
      })
  })
}

utils.addShowToDb = gbOptions => {
  return new Promise(function (resolve, reject) {
    request(gbOptions)
      .then(function (resp) {
        var movieObj = {
          title: resp.title.toLowerCase(),
          description: resp.overview,
          mpaa: resp.rating,
          runtime: resp.duration,
          guideboxId: resp.id,
          imdbId: resp.imdb_id,
          type: 'show'
        }
        movieObj.actors = []
        for (let actor of resp.cast) {
          movieObj.actors.push(actor.name)
        }

        movieObj.genres = []
        for (let genre of resp.genres) {
          movieObj.genres.push(genre.title)
        }

        movieObj.keywords = []
        for (let keyword of resp.tags) {
          movieObj.keywords.push(keyword.tag)
        }
        gbOptions.uri = 'http://api-public.guidebox.com/v2/shows/' + movieObj.guideboxId + '/images'

        request(gbOptions)
        .then(function (resp) {
          // add in thumbnail image
          if (resp.results.banners) {
            movieObj.banner = resp.results.banners[0].xlarge.url
          } else {
            console.log('did not add banner')
          }
          if (resp.results.posters) {
            movieObj.thumbnail = resp.results.posters[0].small.url
            movieObj.poster = resp.results.posters[0].large.url
          } else {
            console.log('did not add thumbnail')
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
            movieObj.imdb = parseFloat(resp.imdbRating, 10)
            movieObj.metaCritic = parseInt(resp.Metascore, 10)
            movieObj.directors = []
            movieObj.directors.push(resp.Writer)
            if (resp.tomatoMeter === 'N/A') {
              movieObj.rottenTomatoes = null
            }
            if (resp.Metascore === 'N/A') {
              movieObj.metaCritic = null
            }
            if (resp.imdbRating === 'N/A') {
              movieObj.imdb = null
            }
            Movie.create(movieObj)
            .then(function (resp) {
              if (resp) {
                resolve(resp)
              }
            })
        .catch(error => {
          console.log('error in adding to db = ', error)
        })
          })
        })
      })
  })
}
module.exports = utils
