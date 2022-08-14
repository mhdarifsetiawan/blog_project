const postService = require("./post.service");
const { Post } = require("../database/models");

// Get all posts
const getAllPosts = async (req, res) => {
  const { writer } = req.query;
  const { search } = req.query;
  const { sort } = req.query;
  // view posts by user auth / user dashboard
  if (writer) {
    try {
      // if post found
      const getPosts = await postService.getAllPosts({ writer, sort });
      if (getPosts.length !== 0) {
        return res.json(getPosts);
        // if post not found
      } else {
        return res.send("Post not found!");
      }
    } catch (error) {
      return res.status(500).json({ message: "ERROR" });
    }
    // view all posts / homepage
  } else {
    const getPublicPosts = await postService.getPublicPosts({ sort });
    return res.json(getPublicPosts);
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
    return res
      .status(200)
      .json({ message: "Post successfully created", recordPost });
  } catch (error) {
    return res.status(400).json({ message: "failed!, somethink wrong" });
  }
};

//Get post detail (single post detail)
const postDetail = async (req, res) => {
  const { postId } = req.params;
  try {
    const getPostDetail = await postService.postDetail({ postId });
    if (getPostDetail !== null) {
      return res.status(200).json(getPostDetail);
    } else {
      return res.status(400).json({ message: "Post not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: "failed!, somethink wrong" });
  }
};

//Edit post
const editPost = async (req, res) => {
  const { postId } = req.params;
  const { title, image, body } = req.body;
  const authUser = req.auth;
  const userId = authUser.id;
  const posts = await Post.findOne({ where: { id: postId } });

  if (userId !== posts.user_id) {
    return res.send("You are not the writer of this post!");
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
  postDetail,
  editPost,
};

module.exports = postController;
