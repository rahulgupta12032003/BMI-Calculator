const mongoose = require('mongoose');

const BmiSchema = mongoose.Schema({ 
    weight : {
        type : Number,
        required : true
    },
    height : {
        type : Number,
        required : true
    },
    bmi : {
        type : Number
    },
    userId : {
        type : String
    }
},{timestamps : true})


const BmiModel = mongoose.model('Bmi_data', BmiSchema);
module.exports = BmiModel;