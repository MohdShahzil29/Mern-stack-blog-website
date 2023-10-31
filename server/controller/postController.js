const PostModels = require("../models/PostModels");
const slugify = require("slugify");
const fs = require("fs");

const createBlogController = async (req, res) => {
  const { name, slug, description, category } = req.fields;
  const { photo } = req.files;
  // validation
  switch (true) {
    case !name:
      return res.status(500).send({ error: "Name is require" });
    case !description:
      return res.status(500).send({ error: "Name is require" });
    case !category:
      return res.status(500).send({ error: "Name is require" });
    case photo && photo.size > 100000:
      return res.status(500).send({
        error: "Photo is require and it should be less than 1 mb",
      });
  }

  try {
    const blogPost = new PostModels({ ...req.fields, slug: slugify(name) });
    if (photo) {
      blogPost.photo.data = fs.readFileSync(photo.path);
      blogPost.photo.contentType = photo.type;
    }
    await blogPost.save();
    return res.status(201).send({
      success: true,
      message: "Post has been created",
      blogPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Post API",
      error,
    });
  }
};

 const getAllBlogsController  = async (req, res) => {
  try {
    const posts = await PostModels.find({}).populate("category").select("photo").limit(12).sort({createdAt: -1})

    return res.status(200).send({
      success: true,
      message: "All blog post list",
      posts
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Post List API",
      error,
    });
  }
 }

 const getPhotoController = async (req, res) => {
  try {
    const posts = await PostModels.findById(req.params.id).select("photo")
    if (posts.photo.data) {
      res.set("Content-type", posts.photo.contentType)
      res.status(200).send(posts.photo.data)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Post List API",
      error,
    });
  }
 }

 const getSelectedPost = async (req, res) => {
  try {
    const post = await PostModels.findOne({slug: req.params.slug}).populate("category").select("-photo")
    if (!post) {
      return res.status(500).send({
        success: false,
        message: "Post not found"
      })
    }
    return res.status(200).send({
      success: true,
      message: 'Post has fetched',
      post
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Selected Post API",
      error,
    });
  }
 }

module.exports = { createBlogController, getAllBlogsController, getPhotoController, getSelectedPost };
