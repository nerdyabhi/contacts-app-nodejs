const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String, 
        required:[true,"Please add the username"],
    },

    email:{
        type:String,
        required:[true ,"Please add user email"],
        unique :[true,"Email address already taken"],
    },
    password:{
        type:String,
        required : [true , "Please add the user password"],
    }
}, {timestamps :true }
);

const userModel = mongoose.model("User" , userSchema);
module.exports = userModel;