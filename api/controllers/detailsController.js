// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')
let guidebox = require('guidebox')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')