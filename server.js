const express = require('express');
const app = express();
require('dotenv').config(); 

const port =3001;

app.use("/api/contacts" , require("./routes/contactRoutes"));
app.listen(port , ()=>{
    console.log(`Site is live on http://localhost:${port}`);
})