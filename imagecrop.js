var fs = require('fs')
var gm = require('gm')
var extract = require('./dataextract.js')
var ocrr = require('./route/ocr.js')

module.exports.cropimage = function (width,height,x,y,src,dst) {
    gm(src)
	.crop(height, width, x, y)
	.write(dst, function (err) {
           if (!err) console.log('crop done')
           extract.dataextract(dst)
    })
 