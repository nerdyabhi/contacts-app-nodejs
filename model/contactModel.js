const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter contact Name"],
    },
    email:{
        type:String,
        required:[true, "Please Enter email address"],
    },
    phone:{
        type:String,
        required:[true , "Please add the contact email address"],
    },
},
    {
        timestamps:true,
    }
);

const contactsModel = mongoose.model("Contact" , contactSchema);

module.exports = contactsModel;