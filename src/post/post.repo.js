const { Post } = require("../database/models");
// const { User } = require("../database/models");

const getAllPosts = async (userId) => {
  return await Post.findOne({
    where: { user_id: userId },
  });
};

const postRepo = {
  getAllPosts,
};

module.exports = postRepo;
