const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const postsRoute = require('./routes/posts'); // Import Routes

// Middlewares
//app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/specific', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We\'re on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
    }, () =>{
    console.log('connected to DB!');
});

app.listen(3000);