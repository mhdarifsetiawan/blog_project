const postRepo = require("./post.repo");

const getAllPosts = async (userId) => {
  return postRepo.getAllPosts(userId);
};

const postService = {
  getAllPosts,
};

module.exports = postService;
