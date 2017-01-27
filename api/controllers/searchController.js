// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let utils = require('./utils')

var searchController = {}

searchController.byMovieTitle = (req, res) => {
  let query = req.headers.query.toLowerCase()

  Movie.find({ title: query })
        .then(function (resp) {
          if (resp.length > 0) {
            console.log('found in database')
            var searchResult = resp
            Movie.find()
                    .then(resp => {
                      for (var i = 0; i < 4; i++) {
                        searchResult.push(resp[i])
                      }
                      console.log(searchResult)
                      res.status(200).send(searchResult)
                    })
          } else {
            let gbOptions = {
              uri: 'http://api-public.guidebox.com/v2/search?type=movie&field=title&query=' + query,
              headers: {
                'User-Agent': 'Request-Promise',
                'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
              },
              json: true // Automatically parses the JSON string in the response
            }
            request(gbOptions)
                    .then(function (resp) {
                      let gbOptionsID = resp.results[0].id
                      gbOptions.uri = 'http://api-public.guidebox.com/v2/movies/' + gbOptionsID
                      utils.addToDb(gbOptions)
                            .then(resp => {
                              console.log('added to database = ', resp)
                              var searchRes = []
                              searchRes.push(resp)
                              Movie.find()
                                    .then(resp => {
                                      for (var i = 0; i < 4; i++) {
                                        searchRes.push(resp[i])
                                      }
                                      res.status(200).send(searchRes)
                                    })
                            })
                    })
          }
        })
.catch(function (error) {
  console.log(error)
})
}

searchController.byShowTitle = (req, res) => {
  console.log('is this firing?')
  let query = req.headers.query.toLowerCase()

  Movie.find({ title: query })
        .then(function (resp) {
          if (resp.length > 0) {
            console.log('found in database')
            var searchResult = resp
            Movie.find()
                    .then(resp => {
                      for (var i = 0; i < 4; i++) {
                        searchResult.push(resp[i])
                      }
                      res.status(200).send(searchResult)
                    })
          } else {
            let gbOptions = {
              uri: 'http://api-public.guidebox.com/v2/search?type=show&field=title&query=' + query,
              headers: {
                'User-Agent': 'Request-Promise',
                'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
              },
              json: true // Automatically parses the JSON string in the response
            }
            request(gbOptions)
                    .then(function (resp) {
                      let gbOptionsID = resp.results[0].id
                      gbOptions.uri = 'http://api-public.guidebox.com/v2/shows/' + gbOptionsID
                      utils.addShowToDb(gbOptions)
                            .then(resp => {
                              console.log('added to database = ', resp)
                              var searchRes = []
                              searchRes.push(resp)
                              Movie.find()
                                    .then(resp => {
                                      for (var i = 0; i < 4; i++) {
                                        searchRes.push(resp[i])
                                      }
                                      res.status(200).send(searchRes)
                                    })
                            })
                    })
          }
        })
.catch(function (error) {
  console.log(error)
})
}

searchController.byGenre = (req, res) => {
  let genre = req.headers.genre
  console.log('you asked to find movies with genre:', genre)

  Movie.find({ genres: genre })
  .then(function (resp) {
    var result = resp.slice(0, 5)
    console.log('resp after genre = ', result)
    res.status(200).send(result)
  })
  .catch(function (err) {
  	res.status(500).send(err)
    console.log('error is', err)
  })
}

searchController.byRelated = (req, res) => {
  let query = req.headers.query.toLowerCase()
  Movie.find({ title: query })
  .then(resp => {
    if (resp.length > 0) {
      console.log('already in database')
        gbOptions = {
          uri: 'http://api-public.guidebox.com/v2/movies/' + resp[0].guideboxId + '/related',
          headers: {
            'User-Agent': 'Request-Promise',
            'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
          },
          json: true // Automatically parses the JSON string in the response
        }
        utils.addRelatedToDB(gbOptions)
        .then(resp => {
          res.status(200).send(resp)
        })
        .catch(error => {
          res.status(404).send(error)
        })
    } else {
      let gbOptions = {
        uri: 'http://api-public.guidebox.com/v2/search?type=movie&field=title&query=' + query,
        headers: {
                'User-Agent': 'Request-Promise',
                'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
              },
        json: true // Automatically parses the JSON string in the response
      }
      request(gbOptions)
      .then(function (resp) {
        let gbOptionsID = resp.results[0].id
        gbOptions.uri = 'http://api-public.guidebox.com/v2/movies/' + gbOptionsID
        utils.addToDb(gbOptions)
              .then(resp => {
                gbOptions = {
                  uri: 'http://api-public.guidebox.com/v2/movies/' + resp.guideboxId + '/related',
                  headers: {
                    'User-Agent': 'Request-Promise',
                    'Authorization': '53d39189c3ecb7ab6757b6bc311f4e5b76c8f792'
                  },
                  json: true // Automatically parses the JSON string in the response
                }
                utils.addRelatedToDB(gbOptions)
                .then(resp => {
                  res.status(200).send(resp)
                })
                .catch(error => {
                  res.status(404).send(error)
                })

                // call util here
              })
      })
    }
  })
}

module.exports = searchController
