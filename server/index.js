const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', emailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});