const express=require('express')
const Signup = require('../controllers/Signup')
const login=require("../controllers/login")
const auth=require("../controllers/auth")
const router=express.Router()
router.post('/signup',Signup)
router.post('/login',login)
router.post('/auth',auth)
module.exports=router