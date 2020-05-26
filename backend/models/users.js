var mongoose = require('mongoose');
var User = new mongoose.Schema({
    firstName:{type:String},
    phoneNumber: {type: String},
    birthday :{type: Date},
    lastName:{type:String},
    email:{ type: String, lowercase: true},
    role:{type:String},
    password:{type: String}
})
module.exports = mongoose.model('users', User);