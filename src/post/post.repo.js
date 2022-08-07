const { Post } = require("../database/models");

// Get all post
const getAllPosts = async (userId) => {
  return await Post.findAll({
    where: { user_id: userId },
  });
};

const getPublicPosts = async () => {
  return await Post.findAll();
};

// Create post
const createPost = async ({ title, image, body, userId }) => {
  return await Post.create({ title, image, body, user_id: userId });
};

// Edit post
const editPost = async ({ postId, title, image, body, userId }) => {
  return await Post.update(
    { title, image, body },
    { where: { id: postId, user_id: userId } }
  );
};

const postRepo = {
  getAllPosts,
  getPublicPosts,
  createPost,
  editPost,
};

module.exports = postRepo;
