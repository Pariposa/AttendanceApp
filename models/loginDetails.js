var mongoose = require('mongoose');
var schema = mongoose.Schema;

delete mongoose.connection.models['LoginDetails'];

var loginDetails = new schema({
    name: {type:String, required: true},
    phoneNumber: {type:Number, required:true},
    role: {type:String, required:true},
    employeId: {type:String},
    logingDetails:[{
        loginTime: {type:Date},
        logoutTime: {type:date},
        location: {type:String},
        Picture: {type:string}
    }]

})
module.exports = mongoose.model('LoginDetails', loginDetails);