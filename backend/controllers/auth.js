const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      email: req.body.email,
      password: hash,
      username: "placeholder_username",
    });

    console.log(user)
    res.status(201).json({ message: `New user registered` });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (!user) return res.status(401).json({ message: "User not found." });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({
      id: user.id,
      token: jwt.sign({ userId: user.id, email: user.email, username: user.username }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
