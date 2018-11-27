const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://sukjunar:Wayne0126!@ds137631.mlab.com:37631/heroku_4s1k6gdh',
    {
        useNewUrlParser: true
    }
);


require('./routes/apiRoutes')(app);


app.listen(PORT, function () {
    console.log(`App running on port ${PORT}`);
});