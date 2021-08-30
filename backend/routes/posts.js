const express = require("express");
const router = express.Router();

// Import middlewares
const checkAuth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

// Import controllers
const postsControllers = require("../controllers/posts");

// Routes
router.get("/", checkAuth, postsControllers.getAllPosts);

// router.get("/:id", checkAuth, postsControllers.getOnePost);

router.get("/user/:id", postsControllers.getUserPosts);

router.post("/create", multer, postsControllers.createOnePost);

// router.post("/:id/like", checkAuth, postsControllers.likeOnePost);

// router.put("/:id", checkAuth, multer, postsControllers.updateOnePost);

// router.delete("/:id", checkAuth, postsControllers.deleteOnePost);

module.exports = router;
