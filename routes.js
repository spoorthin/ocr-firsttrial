var express = require('express')
var router = express.Router()
var ocr = require('./route/ocr.js')

router.post('/savecordinates',ocr.save)

module.exports = router