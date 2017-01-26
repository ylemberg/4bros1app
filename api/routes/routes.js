// require dependencies
let express = require('express')
let router = express.Router()

// require controllers
let searchController = require('../controllers/searchController.js')
let detailsController = require('../controllers/detailsController')
let findFirstFive = require('../controllers/findFirstFive.js')
let sortByGenre = require('../controllers/sortByGenre.js')

router
    .route('/searchByMovieTitle')
    .get(searchController.byMovieTitle)
router
    .route('/searchByMovieTitle/:id')
    .get(detailsController.movieGetOne)

router
    .route('/movies')
    .get(detailsController.moviesGetAll)
router
    .route('/movies/:id')
    .get(detailsController.movieGetOne)

router
    .route('/getFirstFive')
    .get(findFirstFive)

router
    .route('/sortByGenre')
    .get(sortByGenre)

module.exports = router