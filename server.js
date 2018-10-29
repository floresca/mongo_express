const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Application listening on port', port));