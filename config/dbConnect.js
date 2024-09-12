const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/contactsDB";
const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(url);
        console.log("Successfully connected to Database" , );
        
    } catch (error) {
         console.log("Failed connecting to database");
         console.log("With error" , error);
    }
}

module.exports  = connectDB;