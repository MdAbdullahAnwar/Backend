const { Blog, Comment } = require("../models");

const createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    if (!title || !author || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const blog = await Blog.create({ title, author, content });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: {
        model: Comment,
        as: "Comments"
      },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
};
