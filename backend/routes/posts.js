const express=require('express')
const { addPost } = require('../controllers/posts')


const router =express.Router()


router.get("/test",addPost)


module.exports=router;
