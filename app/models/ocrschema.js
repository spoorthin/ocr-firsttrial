var mongoose = require('mongoose')
var Schema = mongoose.Schema


module.exports = mongoose.model('ocrDb', new Schema(
  {
  	header:{
  		       x: { type: Number, required: true },
               y: { type: Number, required: true },
               height: { type: Number, required: true },
               width: { type: Number, required: true }
  	        },
    
    body:{
    		   x: { type: Number, required: true },
               y: { type: Number, required: true },
               height: { type: Number, required: true },
               width: { type: Number, required: true }
        },

    footer:{
    		   x: { type: Number, required: true },
               y: { type: Number, required: true },
               height: { type: Number, required: true },
               width: { type: Number, required: true }
        }
    }
))