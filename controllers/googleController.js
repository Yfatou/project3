const db = require("../models");

// Defining methods for the googleController
module.exports = {
  findAll: function (req, res) {
    db.Google
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
  console.log("req.params.id: " + req.params.id )
    console.log("in controllers findById")
    db.Google
      .findOne({ "googleId": req.params.id },
      function (err, data) {
          console.log('data:', data);
          res.json(data)
        })
      .catch(err => res.status(422).json(err));

  },


  create: function (req, res) {
    db.Google
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  // remove: function (req, res) {
  //   db.Service
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
