const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const failueLogDetails = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    failureTime : { type : String , required : true },
    severity : { type : String , required : true },
    successTime : { type : String , required : true },
    failureCount : {type : Number , required : true },
    failedApi : { type : String , required : true },
    failedMicroervice : { type: mongoose.Schema.Types.ObjectId, ref: "microservices" },
    failureData : {type : Array , required : true }
}, { collection: 'failueLogDetails' });

const createModel = function () {
    mongoose.model("failueLogDetails", failueLogDetails).createCollection()
    return mongoose.model("failueLogDetails", failueLogDetails)
}

module.exports.createModel = createModel;
