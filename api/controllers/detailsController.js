// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')
let guidebox = require('guidebox')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

var detailsController = {}

detailsController.movieGetOne = (req, res) => {
    let movieId = req.params.movieId;
    console.log('GET movieId', movieId);
    Movie
        .findById(movieId)
        .exec(function(err, doc) {
            var response = {
                status: 200,
                message: doc
            };
            if (err) {
                console.log("Error finding movie");
                response.status = 500;
                response.message = err;
            } else if (!doc) {
                response.status = 404;
                response.message = {
                    "message": "movie ID not found"
                };
            }
            res
                .status(response.status)
                .json(response.message);
        });
}
module.exports = detailsController