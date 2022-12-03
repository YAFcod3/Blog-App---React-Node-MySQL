const express=require('express')
const { addPost, getPost, getPosts, updatePost, deletePost } = require('../controllers/posts')


const router =express.Router()


router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)




module.exports=router;
