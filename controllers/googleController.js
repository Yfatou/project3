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

    //   //req.params.id is passed as a zipcode like localhost:3000/api/services/60053
    //   //the find method does a "like match" of zip code with regular expression any before the zip code or after the zip code
    //   console.log("user zip:" + req.params.id);
    //   /*Pattern is the user input zip code  passed in from the client side in the onsubmit method. The regular experience allows to do a look up of any like matches from any characters before the zip code or any 
    //    characters after the zip code. So if you type just 25 in the zip code field, it's going to search any zip code that contains 25 */
    //   var pattern = req.params.id

    db.Google.find({ "_id": req.params.id },
      function (err, data) {
        res.json(data)
      })
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {
    db.Google.findOne({ email: req.body.email }).then(dbModel => {
      if (!dbModel) {
         db.Google
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
      else
          res.json(dbModel)
    })
  },
};
