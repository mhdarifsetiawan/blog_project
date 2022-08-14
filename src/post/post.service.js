const postRepo = require("./post.repo");

// Get all post by userId
const getAllPosts = async ({ writer, sort }) => {
  return postRepo.getAllPosts({ writer, sort });
};

// Get all post public / homepage
const getPublicPosts = async ({ sort }) => {
  return postRepo.getPublicPosts({ sort });
};

// Create post
const createPost = async ({ title, image, body, userId }) => {
  return postRepo.createPost({ title, image, body, userId });
};

// Post detail (get post detail)
const postDetail = async ({ postId }) => {
  return postRepo.postDetail({ postId });
};

// Edit post
const editPost = async ({ postId, title, image, body, userId }) => {
  return postRepo.editPost({ postId, title, image, body, userId });
};

const postService = {
  getAllPosts,
  getPublicPosts,
  createPost,
  postDetail,
  editPost,
};

module.exports = postService;
