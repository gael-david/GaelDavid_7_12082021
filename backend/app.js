const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "images")));

const cors = require("cors");
app.use(cors());

const helmet = require("helmet");
app.use(helmet());

const { SQLConnection } = require("./mySQL");
SQLConnection();

// Routes
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

app.listen(4000, () => {
  console.log(`Connected on http://localhost:${port}`);
});
