var mongoose = require('mongoose');
var User = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{ type: String, lowercase: true},
    password:{type: String}
})
module.exports = mongoose.model('users', User);