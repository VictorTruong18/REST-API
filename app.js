require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");


app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user')


//Middlewares 
app.use('/posts', postsRoute);
app.use('/user',userRoute );

//ROUTES
app.get('/',(req,res) => {
    res.send('we are on home');
});


// //Connect to DB
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connected !"))


//How do we start listening to the server
app.listen(3000);