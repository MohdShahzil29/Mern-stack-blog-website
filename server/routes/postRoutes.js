const express = require('express')
const formidable = require('express-formidable')
const { createBlogController, getAllBlogsController, getPhotoController, getSelectedPost} = require('../controller/postController')

const router = express.Router()

// create blog post
router.post('/create-blog', formidable(), createBlogController)
// get post 
router.get('/get-all-blogs', getAllBlogsController)
// get photo
router.get('/get-photo/:pid', getPhotoController)
// get selected post
router.get("/get-selected-post/:slug", getSelectedPost)
 

module.exports = router