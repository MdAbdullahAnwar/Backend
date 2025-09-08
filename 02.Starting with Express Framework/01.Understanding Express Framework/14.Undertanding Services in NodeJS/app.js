const express = require('express');
const app = express();
const port = 3000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome Users');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});