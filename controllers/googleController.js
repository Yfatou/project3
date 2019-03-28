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
  // findById: function (req, res) {

  //   //req.params.id is passed as a zipcode like localhost:3000/api/services/60053
  //   //the find method does a "like match" of zip code with regular expression any before the zip code or after the zip code
  //   console.log("user zip:" + req.params.id);
  //   /*Pattern is the user input zip code  passed in from the client side in the onsubmit method. The regular experience allows to do a look up of any like matches from any characters before the zip code or any 
  //    characters after the zip code. So if you type just 25 in the zip code field, it's going to search any zip code that contains 25 */
  //   var pattern = req.params.id

  //   db.Google.find({ "zip": { $regex: '.*' + pattern + '.*' } },
  //     function (err, data) {
  //       console.log('data:', data);

  //       res.json(data)
  //     })
  //     .catch(err => res.status(422).json(err));

  // },
  create: function (req, res) {
    db.Google
      .createCollection(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // update: function (req, res) {
  //   db.Google
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // remove: function (req, res) {
  //   db.Service
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
