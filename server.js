const express = require('express');
const app = express();
const connectDB = require('./config/dbConnect');

connectDB();
const port =3001;
// Middlewares
app.use(express.json());

app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use("/api/users" , require("./routes/userRoutes.js"));


app.listen(port , ()=>{
    console.log(`Site is live on http://localhost:${port}`);
})