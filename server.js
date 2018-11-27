const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URI = require("./config/keys.js")

const PORT = PORT || 8080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
    MONGODB_URI || 'mongodb://localhost/kudoApp',
    {
        useMongoClient: true
    }
);


require('./routes/apiRoutes')(app);


app.listen(PORT, function () {
    console.log(`App running on port ${PORT}`);
});