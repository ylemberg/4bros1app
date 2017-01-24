// require dependencies
let express = require('express')
let router = express.Router()

// require controllers
let searchController = require('../controllers/searchController.js')
let detailsController = require('../controllers/detailsController')
let findFirstFive = require('../controllers/findFirstFive.js')

router
    .route('/searchByMovieTitle')
    .get(searchController.byMovieTitle)

router
    .route('/movie/:movidId')
    .get(detailsController.movieGetOne);

router
	.route('/getFirstFive')
	.get(findFirstFive)

module.exports = router