const postService = require("./post.service");
const { Post } = require("../database/models");

// Get all posts
const getAllPosts = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
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
  const authUser = req.auth;
  try {
    const userId = authUser.id;
    const recordPost = await postService.createPost({
      title,
      image,
      body,
      userId,
    });
    return res.json(recordPost);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "gagal!!!, sepertinya ada yang salah" });
  }
};

const editPost = async (req, res) => {
  const { postId } = req.params;
  const { title, image, body } = req.body;
  const authUser = req.auth;
  const userId = authUser.id;
  const posts = await Post.findOne({ where: { id: postId } });

  // return res.json(posts);
  if (userId !== posts.user_id) {
    return res.send("kamu gak boleh edit artikel yang bukan milikmu ya!");
  } else {
    const recordPostEdit = await postService.editPost({
      postId,
      title,
      image,
      body,
      userId,
    });
    return res.json(recordPostEdit);
  }
};

const postController = {
  getAllPosts,
  createPost,
  editPost,
};

module.exports = postController;
