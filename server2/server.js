const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
require('dotenv').config();
const connection = require('./config/dbConfig');
const portfolioRoute =  require('./routes/portfolioRoute');
const path = require("path")
// const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');
// const postRoute = require('./routes/posts');


app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/portfolio', portfolioRoute);

// Connect to the database
connection();
app.listen(3001, () => {
    console.log(`Backend server is running ${port}`)
});