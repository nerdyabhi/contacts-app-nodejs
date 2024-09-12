const asyncHandler = require('express-async-handler');
const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = "NERDYABHI";



// @description : register user
// @route PUT /api/users/register
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    const {username , email , password} = req.body;
    if(!username || !email || !password) res.status(400).json({message:"Please Enter valid credentitals"});

    const userAvailable = await userModel.findOne({email});
    if(userAvailable) res.status(400).json({message:"User already exist"});

    const hashedPassword = await bcrypt.hash(password, 10);
   const user = await userModel.create({
    username, 
    email ,
    password:hashedPassword,
   })

   if(!user) res.status(400).json({message:"Data is not valid"});
   
   res.json({message:`Successfully created the ${user}`});

}) 

// @description : Login user
// @route PUT /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        res.status(400).json({ message: `All fields are mandatory` });
    }

    const user = await userModel.findOne({email});

    if(user && (await bcrypt.compare(password , user.password))){
        const token = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            }
        } , TOKEN_SECRET)
        res.status(200).json({token});
    }
    else{
        res.status(401).json({message:"Please Enter valid Credentials"});
    }

   

})

// @description : Login user
// @route PUT /api/users/current
// @access private
const currentInfo = asyncHandler((req, res)=>{
    res.send("Current user info");
})

module.exports = {registerUser , loginUser , currentInfo};