const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: `New user registered` });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    console.log(user);

    if (!user) return res.status(401).json({ message: "User not found." });

    if (user.password !== password) return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({
      id: user.id,
      token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" }),
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
