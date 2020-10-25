const mongoose= require('mongoose');
const agencyTrackerSchema = new mongoose.Schema ({
    firstname:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
    },
    lastname:{
        type:String,
        lowercase:true,
        unique:false,
        required:false,
    },
    monday:{
        type:Number,
        unique: false,
        required:false
    },
    tuesday:{
        type:Number,
        unique: false,
        required:false
    },
    wednesday:{
        type:Number,
        unique: false,
        required:false
    },
    thursday:{
        type:Number,
        unique: false,
        required:false
    },
    friday:{
        type:Number,
        unique: false,
        required:false
    },
    saturday:{
        type:Number,
        unique: false,
        required:false
    },
    sunday:{
        type:Number,
        unique: false,
        required:false
    },
    date:{type:Date, default:Date.now},
});
const agencyTracking3= mongoose.model('agency3',agencyTrackerSchema);
module.exports = agencyTracking3;
