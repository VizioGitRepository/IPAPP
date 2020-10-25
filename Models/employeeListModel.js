const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true 
    },
    lname:{
        type:String,
        required:true
    },
    shift:{
        required:true,
        type:Number,
        min:1,
        max:3
    },
    number:{
        type:Number,
        required:true,
    },
    
});

module.exports=mongoose.model('employee',employeeSchema);