// require dependencies
let express = require('express')
let router = express.Router()

// require controllers
let searchController = require('../controllers/searchController.js')

router
.route('/searchByMovieTitle')
.get(searchController.byMovieTitle)

router
.route('/movieDetails')
.get(searchController.byMovieTitle)

module.exports = router
