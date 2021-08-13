const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    // const hash = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
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
    const user = await User.findOne({ where: { email: email } });

    if (!user) return res.status(401).json({ error: "User not found." });

    if (user.password !== password) return res.status(401).json({ error: "Incorrect password" });

    res.status(200).json({
      email,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
