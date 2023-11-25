const express=require('express')
const router=express.Router()
const {getPosts,savePosts,updatePost,deletePost}=require('../controllers/Post_controller')
router.get('/',getPosts)
router.post('/post',savePosts)
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)
module.exports=router