const express = require('express');
// const connectDB = require('./config/db');
// const path = require('path');

const app = express();

// connectDB();

// Init Middleware
// app.use(express.json());

// app.use('/api/users', require('./routes/api/users'));
app.get('/',(req,res) => res.send('api running'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));