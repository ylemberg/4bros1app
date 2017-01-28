// require dependencies
let mongoose = require('mongoose')
let request = require('request-promise')

// require db models
let Movie = require('../models/Movie.js')
let User = require('../models/User.js')

let staffRecs = (req, res) => {
    recArr = ["zootopia", 'the usual suspects', 'emperors new groove', 'captain america: civil war', 'stand by me']
    recResultArr = []
    recArr.forEach(rec => {
        Movie.find({title: rec})
        .then(resp => {
            recResultArr.push(resp[0])
            if (recResultArr.length === 5) {
                res.status(200).send(recResultArr)
            }
        })
        .catch(err => {
            console.log('err is ', err)
            res.status(404).send(err)
        })
    })
}

module.exports = staffRecs