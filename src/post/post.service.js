const postRepo = require("./post.repo");

// Get all post
const getAllPosts = async (userId) => {
  return postRepo.getAllPosts(userId);
};

// Create post
const createPost = async ({ title, image, body, userId }) => {
  return postRepo.createPost({ title, image, body, userId });
};

// Edit post
const editPost = async ({ postId, title, image, body, userId }) => {
  return postRepo.editPost({ postId, title, image, body, userId });
};

const postService = {
  getAllPosts,
  createPost,
  editPost,
};

module.exports = postService;
