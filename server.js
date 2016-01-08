var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./routes')
var mongoose   = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ocrDb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 8000)

app.use(function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*')
 res.header( "Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS") 
 res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
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
	
