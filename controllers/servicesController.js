const db = require("../models");

// Defining methods for the servicesController
module.exports = {
  findAll: function (req, res) {
    db.Service
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {

    //req.params.id is passed as a zipcode like localhost:3000/api/services/60053
    //the find method does a "like match" of zip code with regular expression any before the zip code or after the zip code
    console.log("user zip:"+ req.params.id);

    var pattern = req.params.id 

    db.Service.find({ "zip": { $regex: '.*' + pattern + '.*' } },
      function (err, data) {
        console.log('data:', data);

        res.json(data)
      })
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {
    db.Service
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Service
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function (req, res) {
    db.Service
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
