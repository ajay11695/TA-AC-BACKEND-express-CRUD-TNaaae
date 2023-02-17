var mongoose = require('mongoose')
var Schema = mongoose.Schema

var formSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, Match: /@/ },
    age:Number
},{timestamps:true})

var form=mongoose.model('form',formSchema)
module.exports=form