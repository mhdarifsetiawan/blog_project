const postRepo = require("./post.repo");

// Get all post by userId
const getAllPosts = async (userId) => {
  return postRepo.getAllPosts(userId);
};

// Get all post public
const getPublicPosts = async () => {
  return postRepo.getPublicPosts();
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
  getPublicPosts,
  createPost,
  editPost,
};

module.exports = postService;
