const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API with MVC structure!");
});

app.use("/api/blogs", require("./routes/blog.routes"));
app.use("/api/comments", require("./routes/comment.routes"));

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
