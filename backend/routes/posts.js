const express = require("express");
const router = express.Router();

// Import middlewares
const checkAuth = require("../middlewares/auth");

// Import controllers
const postsControllers = require("../controllers/posts");

// Routes
router.get("/", postsControllers.getAllPosts);

// router.get("/:id", checkAuth, postsControllers.getOnePost);

// router.post("/", checkAuth, multer, postsControllers.createOnePost);

// router.post("/:id/like", checkAuth, postsControllers.likeOnePost);

// router.put("/:id", checkAuth, multer, postsControllers.updateOnePost);

// router.delete("/:id", checkAuth, postsControllers.deleteOnePost);

module.exports = router;
