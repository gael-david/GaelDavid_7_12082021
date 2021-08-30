const { models } = require("../sequelize/config");

exports.getAllPosts = async (req, res) => {
  try {
    const betterPosts = await models.post.findAll({
      include: [
        {
          model: models.user,
          attributes: ["email", "username", "image", "id"],
        },
      ],
    });

    betterPosts.reverse();
    res.status(200).json(betterPosts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("userId: ", id);
    const posts = await models.post.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: models.user,
          attributes: ["email", "username", "image", "id"],
        },
      ],
    });

    posts.reverse();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.createOnePost = async (req, res) => {
  try {
    const { userId, post } = req.body;
    const newPost = await models.post.create({
      userId,
      post,
      imageUrl: req.file ? `${req.protocol}://${req.get("host")}/${req?.file?.path}` : null,
    });

    res.status(200).json("Post created");
  } catch (error) {
    res.status(400).json({ error });
  }
};
