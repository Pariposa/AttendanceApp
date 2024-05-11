var mongoose = require('mongoose');
var schema = mongoose.Schema;

delete mongoose.connection.models['User'];

var user = new schema({
    name: {type:String, required: true},
    phoneNumber: {type:Number, required:true},
    role: {type:String, required:true},
    employeId: {type:String},
    address: {type:String},

})
module.exports = mongoose.model('User', user);