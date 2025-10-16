const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/db-connection');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/expenses', expenseRoutes);

sequelize.sync({force: false})
  .then(() => {
    console.log("All tables synced");
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  })
  .catch(err => console.log("Error syncing tables:", err));
