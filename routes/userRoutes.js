const express = require('express');
const router = express.Router();
const {registerUser , loginUser , currentInfo} = require('../controllers/userControllers');

router.post("/register" , registerUser )

router.post("/login" ,loginUser )

router.get("/current" , currentInfo )

module.exports = router;