var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, Match: /@/ },
    age:Number,
    bio:String
},{timestamps:true})

var user=mongoose.model('user',userSchema)
module.exports=user