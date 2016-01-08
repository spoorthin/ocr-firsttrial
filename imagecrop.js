var fs = require('fs')
var gm = require('gm')
var extract = require('./dataextract.js')


module.exports.cropimage = function (height,width,x,y) {

	gm('/home/spoorthi/Desktop/Invoice-Template-Nsuay7z.jpg')
	.crop(height, width, x, y)
	.write('/home/spoorthi/Invoice-Template-Nsuay7z2.jpg', function (err) {
           if (!err) console.log('crop done')
           extract.dataextract()
    })
}






