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

    findById: function(req, res) {
        db.User
            .findOne({_id: req.params.id}).populate("plants")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    findOne: function(req, res) {
        db.User
            .findOne({ username: req.body.username})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    addPlant: function(req, res) {
        db.Plant.create(req.body)
            .then(dbPlant => {
                return db.User.findOneAndUpdate(
                    { _id: req.params.id},
                       { $push: {
                           plants: dbPlant.id },
                },
                    {new: true}
                )
                .then(dbUser => res.json(dbUser))
                .catch(err => res.status(422).json(err))
        })
    }
}