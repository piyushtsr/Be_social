const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();


// Init Middleware
app.use(express.json());





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));