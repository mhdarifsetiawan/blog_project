const express = require("express");
const tokenVerification = require("../middleware/token.verification");
const postRouter = express.Router();

const postController = require("./post.controller");

// API - Get all posts
postRouter.get("/posts", postController.getAllPosts);

// API - Create post
postRouter.post("/posts", tokenVerification, postController.createPost);

// API - Detail Post/get single post (Read)
postRouter.get("posts/:postId");

// API - Edit post (Update)
postRouter.put("/posts/:postId", tokenVerification, postController.editPost);

// API - Delete post ! //TODO: Up coming

module.exports = postRouter;
