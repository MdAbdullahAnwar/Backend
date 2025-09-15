const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// DB Sync & Server Start
sequelize.sync({ force: false })
  .then(() => {
    console.log("Database synced");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.log("DB Sync Error:", err));
