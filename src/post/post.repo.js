const { NUMBER } = require("sequelize");
const { Post } = require("../database/models");

// Get all post
const getAllPosts = async ({ writer, sort = "asc" }) => {
  return await Post.findAll({
    where: { user_id: writer },
    order: [["id", sort]],
  });
};

const getPublicPosts = async ({ sort = "asc" }) => {
  return await Post.findAll({ order: [["id", sort]] });
};

// Create post
const createPost = async ({ title, image, body, userId }) => {
  return await Post.create({ title, image, body, user_id: userId });
};

// Post detail (get post detail)
const postDetail = async ({ postId }) => {
  return await Post.findOne({ where: { id: postId } });
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
  postDetail,
  editPost,
};

module.exports = postRepo;
