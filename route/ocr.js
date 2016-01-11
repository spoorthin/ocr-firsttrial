
var ocrDb = require('../app/models/ocrschema')
var crop = require('../imagecrop.js')
var i=1
var src = '/home/spoorthi/Desktop/invoice2.png'
var dst = '/home/spoorthi/ocrimages/invoice2croppedheader.png'
var dst2 = '/home/spoorthi/ocrimages/invoice2croppedbody.png'
var dst3 = '/home/spoorthi/ocrimages/invoice2croppedbody-header.png'
var dst4 = '/home/spoorthi/ocrimages/invoice2croppedfooter.png'

module.exports.save = function (req,res) {

     var body=[]
     for(i=0;i<req.body.body.header.length;i++){
     body.push({
        //attr:req.body.body.header[i].attr,
        x:req.body.body.header[i].x,
        y:req.body.body.header[i].y+req.body.body.header[i].height,
        height:req.body.body.header[i].height,
        width:req.body.body.header[i].width
    })
    var img= '/home/spoorthi/ocrimages/invoice2croppedbody-header'+i+'.png'
     crop.cropimage(body[i].height,body[i].width,body[i].x,body[i].y,src,img)
   }
    // while( bodyheader[i-1].x < req.body.body.width){
    //   //console.log("..............hi")
    //     bodyheader.push({
    //     x:bodyheader[i-1].x+req.body.body.header[0].width,
    //     y:req.body.body.header[0].y,
    //     height:req.body.body.header[0].height,
    //     width:req.body.body.header[0].width
    //   })
    //     crop.cropimage(bodyheader[i].height,bodyheader[i].width,bodyheader[i].x,bodyheader[i].y,src,dst3+i)
    //     i++
    // }
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
            width:req.body.body.width,
            header:req.body.body.header
                    // attr:req.body.body.header[0].attr,
                    // x:req.body.body.header[0].x,
                    // y:req.body.body.header[0].y,
                    // height:req.body.body.header[0].height,
                    // width:req.body.body.header[0].width
            },

      footer:{
            x:req.body.footer.x,
            y:req.body.footer.y,
            height:req.body.footer.height,
            width:req.body.footer.width,
            
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
            
           
            crop.cropimage(rec.header.width,rec.header.height,rec.header.x,rec.header.y,src,dst)
            crop.cropimage(rec.body.width,rec.body.height,rec.body.x,rec.body.y,src,dst2)
            //crop.cropimage(rec.body.header[0].width,rec.body.header[0].height,rec.body.header[0].x,rec.body.header[0].y,src,dst3)
            crop.cropimage(rec.footer.width,rec.footer.height,rec.footer.x,rec.footer.y,src,dst4)
        }
    })

 }
