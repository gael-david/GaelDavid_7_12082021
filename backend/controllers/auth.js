const { models } = require("../sequelize/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtSecret = process.env.SQL_DB;

exports.registerUser = async (req, res) => {
  try {
    const { password, email, username } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await models.user.create({
      email: email,
      username: username,
      password: hash,
      image: `https://avatars.dicebear.com/api/bottts/${username}.svg`,
    });

    console.log(user);
    res.status(201).json({ message: `New user registered` });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await models.user.findOne({ where: { email: email } });

    if (!user) return res.status(401).json({ message: "User not found." });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({
      id: user.id,
      token: jwt.sign({ id: user.id, email: user.email, username: user.username, image: user.image }, jwtSecret, {
        expiresIn: "72h",
      }),
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, jwtSecret);

    const userId = decodedToken.id;

    console.log("User to delete: ", userId);

    const user = await models.user.destroy({ where: { id: userId } });

    res.status(201).json({ message: `User deleted` });
  } catch (error) {
    res.status(500).json({ error });
  }
};
