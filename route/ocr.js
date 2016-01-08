
var ocrDb = require('../app/models/ocrschema')
var crop = require('../imagecrop.js')
module.exports.save = function (req,res) {
    var ocr = new ocrDb({
      
      header:{
      	        x:req.body.header.x,
		        y:req.body.header.y,
		        height:req.body.header.height,
		        width:req.body.header.width
      },

      body:{
      	        x:req.body.body.x,
		        y:req.body.body.y,
		        height:req.body.body.height,
		        width:req.body.body.width

      },

      footer:{
      	        x:req.body.footer.x,
		        y:req.body.footer.y,
		        height:req.body.footer.height,
		        width:req.body.footer.width
      }

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
            crop.cropimage(rec.header.height,rec.header.width,rec.header.x,rec.header.y)
        }
    })

}
