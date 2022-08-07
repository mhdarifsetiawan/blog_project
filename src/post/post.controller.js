const postService = require("./post.service");

const getAllPosts = async (req, res) => {
  const userId = req.body;
  try {
    const getPosts = await postService.getAllPosts(userId);
    console.log(getPosts);
    return res.json(getPosts);
  } catch (error) {
    return res.status(500).json({ message: "post not found!" });
  }
};

// Create post
const createPost = async (req, res) => {
  const { title, image, body } = req.body;
  try {
    const recordPost = await postService.createPost({ title, image, body });
    return res.json(recordPost);
  } catch (error) {
    return res.status(500).json({ message: "Create post failed!" });
  }
};

const postController = {
  getAllPosts,
  createPost,
};

module.exports = postController;
