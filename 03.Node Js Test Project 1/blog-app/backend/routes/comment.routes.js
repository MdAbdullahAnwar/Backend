const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/:blogId", commentController.createComment);

router.delete("/:id", commentController.deleteComment);

module.exports = router;
