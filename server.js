const express = require('express');
const app = express();
const connectDB = require('./config/dbConnect');

connectDB();
const port =3001;
// Middlewares
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
app.use("/api/contacts" , require("./routes/contactRoutes"));


app.listen(port , ()=>{
    console.log(`Site is live on http://localhost:${port}`);
})