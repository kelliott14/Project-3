const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(442).json(err));
    },
    update: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addPlant: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id },
                {$push: {
                    plants: req.body
                }})
    },
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    findOne: function(req, res) {
        db.User
            .findOne({ username: req.body.username})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}