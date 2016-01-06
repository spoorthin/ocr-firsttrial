var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./routes')
var mongoose   = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ocrDb')

app.use(bodyParser.json())
app.set('port', process.env.PORT || 8000)
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
 })
app.use(function(req, res, next){
	console.log('An action was performed by the server.')
	next()
 })

app.use('/', router)

var server =  app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + server.address().port)
 })	
	
