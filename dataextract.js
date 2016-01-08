var tesseract = require('node-tesseract')

module.exports.dataextract = function () {

	tesseract.process(__dirname + '/../Invoice-Template-Nsuay7z2.jpg',function(err, text) {
	if(err) {
		console.error(err)
	} else {
		console.log(text)
	}
  })

}
