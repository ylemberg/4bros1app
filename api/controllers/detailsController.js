// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')
let guidebox = require('guidebox')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let detailsController = {}

detailsController.moviesGetAll = function(req, res) {
    console.log('GET the movie');
    console.log(req.query);
    var offset = 0;
    var count = 10;
    var maxCount = 20;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
        res
            .status(400)
            .json({
                "message": "querysting offset and count must be numbers"
            });
        return;
    }
    // error if someone wants to get too large of movieCount
    if (count > maxCount) {
        res
            .status(400)
            .json({
                'message': 'count limit ' + maxcount + " exceeded"
            });
        return;
    }

    Movie
        .find()
        .skip(offset)
        .limit(count)
        .exec(function(err, movie) {
            if (err) {
                console.log("error finding movie");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log('found movie', movie.length);
                res
                    .json(movie);
            }
        });
};

detailsController.movieGetOne = (req, res) => {
    let movieId = req.params.id;
    console.log("req.params", req.params.id)

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
// pass in guidebox id update counter; findone and update,
// detailsController.updateCounter = function(req, res) {
//     var name = req.body.name;
//
//     var description = req.body.description;
//     Movie
//         .create({
//             name: name,
//         }, function(err, movie) {
//             if (err) {
//                 console.log('error creating movie Document');
//                 res
//                     .status(400)
//                     .json(err);
//             } else {
//                 console.log('movie created ', movie);
//                 res
//                     .status(201)
//                     .json(movie);
//             }
//         });
//
// };


module.exports = detailsController
