const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        // console.log('Connected to MongoDB!!!')
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})

/***************************************** new code **********************/
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// // Set EJS as templating engine 
// app.set("view engine", "ejs");

// // Step 5 - set up multer for storing uploaded files

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// const upload = multer({ storage: storage });

// // Step 6 - load the mongoose model for Image

// var imgModel = require('./model');
/********************** new code ends ****************************/

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})