
var ocrDb = require('../app/models/ocrschema')

module.exports.save = function (req,res) {
    var ocr = new ocrDb({
		x1:req.body.x1,
		x2:req.body.x2,
		height:req.body.height,
		width:req.body.width
    })

	ocr.save(function (err,rec) {
        if (err)  
            res.json(err)
        else
        {
            res.json({
                success: 'true',
                message: 'coordinates saved!',
                data:ocr
            })
        }
    })
}