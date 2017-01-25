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
        .then(function(resp) {
            if (resp.length > 0) {
                console.log('found in database')
                var searchResult = resp
                Movie.find()
                    .then(resp => {
                        for (var i = 0; i < 5; i++) {
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
                    .then(function(resp) {
                        let gbOptionsID = resp.results[0].id
                        gbOptions.uri = 'http://api-public.guidebox.com/v2/movies/' + gbOptionsID
                        utils.addToDb(gbOptions)
                            .then(resp => {
                                console.log('added to database = ', resp)
                                var searchRes = [];
                                searchRes.push(resp)
                                Movie.find()
                                    .then(resp => {
                                        for (var i = 0; i < 5; i++) {
                                            searchRes.push(resp[i])
                                        }
                                        console.log('searchRes = ', searchRes)
                                        res.status(200).send(searchRes)
                                    })
                            })
                    })
            }
        })
        .catch(function(error) {
            console.log(error)
        })
}

module.exports = searchController