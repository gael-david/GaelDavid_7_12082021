const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    posts.reverse();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.createOnePost = async (req, res) => {
  try {
    const { userId, post } = req.body;

    console.log(userId, post);
    console.log(req.file);
    const newPost = await Post.create({
      userId,
      post,
      imageUrl: req.file ? `${req.protocol}://${req.get("host")}/${req?.file?.path}` : null,
    });

    res.status(200).json("Post created");
  } catch (error) {
    res.status(400).json({ error });
  }
};
