var mongoose = require('mongoose')
var Schema = mongoose.Schema


module.exports = mongoose.model('ocrDb', new Schema(
  {
    x1: { type: Number, required: true },
    x2: { type: Number, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true }
  }
))