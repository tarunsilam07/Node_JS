// routes.js
const express=require('express');
const router=express.Router();
const {generateShortURL,getAnalytics,getLink}=require('../Controllers/controller.js')
const URL=require('../Models/url.js')


router.post('/',generateShortURL);
router.get('/analytics/:shortId',getAnalytics);
router.get('/:shortId',getLink);

module.exports=router;