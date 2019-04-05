const db = require("../models");
const nodemailer = require('nodemailer');
// Defining methods for the servicesController
module.exports = {
  findemail: function(req, res) {


    console.log("before email" +req.body.email);

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>First Name: ${req.body.fname} </li>
        <li>Last Name: ${req.body.lname} </li>
        <li>Email: ${req.body.email} </li>
        <li>Phone: ${req.body.phone} </li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;//backtick ending




   //let output ="<h1>"+req.body.message+"</h1>"
    let transporter = nodemailer.createTransport({

      host: 'smtp.gmail.com',

      port: 587,

      secure: false, // true for 465, false for other ports

      auth: {

          user: 'syeda.northwestern@gmail.com', // generated ethereal user

          pass: 'Aff0rdable'  // generated ethereal password

      },
      // adding another object to run on localhost. otherwise rejecting on local host. 
      tls: {

          rejectUnauthorized: false

      }

  });
  // setup email data with unicode symbols

  let mailOptions = {

      from: '"SeniorNextDoor" <syeda.northwestern@gmail.com>', // sender address (user who is signed in with google)

      to: req.body.email,  // list of receivers (senior who post the service request)

      subject: ' Contact Request From SeniorNextDoor', // Subject line

      text: 'Greetings', // plain text body

      html: output // html body

  };

  // send mail with defined transport object

  transporter.sendMail(mailOptions, (error, info) => {

      if (error) {

          return console.log(error);

      }

      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


      res.render('ContactForm');

  });
 console.log("success!!")
   res.json({"success":true})



  },
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
    console.log("user zip:" + req.params.id);
    /*Pattern is the user input zip code  passed in from the client side in the onsubmit method. The regular experience allows to do a look up of any like matches from any characters before the zip code or any 
     characters after the zip code. So if you type just 25 in the zip code field, it's going to search any zip code that contains 25 */
    var pattern = req.params.id

    db.Service.find({ "zip": { $regex: '.*' + pattern + '.*' } },
      function (err, data) {
        console.log('data:', data);

        res.json(data)
      })
      .catch(err => res.status(422).json(err));

  },
  create: function (req, res) {

    console.log("req.params.id:"+req.params.id);

    console.log(req.body);

    db.Service
    .create(req.body)
    .then(function(dbService){
     return db.Google.findOneAndUpdate({_id : req.params.id}, { $push: { requesterId: dbService._id } }, { new: true })
    })
    .then(dbModel => res.json(dbModel))
  
    .catch(err => res.status(422).json(err));

    // db.Service
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
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