const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Plant
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    waterPlant: function(req, res) {
        db.Plant
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deletePlant: function(req, res) {
        db.Plant
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}