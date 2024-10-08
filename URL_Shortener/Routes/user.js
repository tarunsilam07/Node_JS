

// user routes
const express=require('express');
const router=express.Router();
const {signUp,login}=require('../Controllers/user.js')


router.post('/',signUp);
router.post('/login',login)

module.exports=router;