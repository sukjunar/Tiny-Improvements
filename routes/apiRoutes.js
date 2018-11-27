const User = require('../models/User');
const Kudo = require('../models/Kudo');

module.exports = function (app) {

    app.post('/api/session', function (req, res) {
        User.find(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/user/', function (req, res) {
        User.find({})
            .then(function (data) {
                console.log('data', data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/user/:id', function (req, res) {
        User.find({ _id: req.params.id })
            .populate('kudos')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/user', function (req, res) {
        User.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/kudo', function (req, res) {
        console.log(req.body)
        const userId = req.body.userId;
        const newEntry = {
            to: req.body.to,
            from: req.body.from,
            title: req.body.title,
            message: req.body.message
        }

        Kudo.create(newEntry)
            .then(function (kudoData) {
                res.json(kudoData)
            })
            .then(function (userData) {
                res.json(userData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/kudo/', function (req, res) {
        Kudo.find({})
            .populate('to')
            .populate('from')
            .then(function (data) {
                console.log('data', data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
}