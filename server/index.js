const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./Routes/emailRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', emailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});