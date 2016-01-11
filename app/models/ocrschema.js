var mongoose = require('mongoose')
var Schema = mongoose.Schema


module.exports = mongoose.model('ocrDb', new Schema(
  {
  	header:{
  		       x:  Number, 
               y:  Number, 
               height:  Number, 
               width:  Number
  	        },
    
    body:{
    	         x:  Number, 
               y:  Number, 
               height:  Number, 
               width:  Number, 

               header:[{
                       attr:  String, 
                       x:  Number,
                      y: Number,
                      height:  Number, 
                      width:  Number
               }]
        },

    footer:{
    		   x:  Number,
               y:  Number, 
               height:  Number, 
               width:Number
        }
    }
))