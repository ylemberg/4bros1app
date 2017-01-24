// require dependencies
let express = require('express')
let router = express.Router()

// require controllers
let searchController = require('../controllers/searchController.js')
let detailsController = require('../controllers/detailsController')

router
    .route('/searchByMovieTitle')
    .get(searchController.byMovieTitle)

router
    .route('/movie/:movidId')
    .get(detailsController.movieGetOne);

module.exports = router