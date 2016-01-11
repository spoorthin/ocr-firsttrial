var tesseract = require('node-tesseract')

module.exports.dataextract = function (src) {

	tesseract.process(src,function(err, text) {
	if(err) {
		console.error(err)
	} else {
		console.log(text)
	}
  })

}


