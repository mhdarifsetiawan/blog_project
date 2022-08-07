const express = require("express");
const postRouter = express.Router();

const postController = require("./post.controller");

// API - Get all posts
postRouter.get("/posts", postController.getAllPosts);

// API - Create post
postRouter.post("/posts", postController.createPost);

// API - Detail Post/get single post (Read)
postRouter.get("posts/postId");

// API - Edit post (Update)
postRouter.put("/posts/:userId");

// API - Delete post

module.exports = postRouter;
