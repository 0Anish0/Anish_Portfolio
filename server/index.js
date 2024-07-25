const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./Routes/emailRoutes');
const HireRoutes = require('./Routes/hireMeRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', emailRoutes);
app.use('/api', HireRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});