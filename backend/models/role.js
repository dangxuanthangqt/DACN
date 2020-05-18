var mongoose = require('mongoose');
var Role = new mongoose.Schema({
    role:[{type :mongoose.Schema.Types.ObjectId}]
})
module.exports = mongoose.model('users', User);