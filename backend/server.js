const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})