var mongoose = require('mongoose');
var schema = mongoose.Schema;

delete mongoose.connection.models['Leaves'];

var leaves = new schema({
    phoneNumber: {type:Number, required:true},
    totalNumberOfLeaves :{type:Number},
    el:{type:Number},
    cl:{type:Number},
    sl:{type:Number}
})
module.exports = mongoose.model('Leaves', leaves);