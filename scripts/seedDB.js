const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3db"
);



const serviceSeed = [
    {
        title: "Lawn Mowing",
        time: "9:00 am",
        zip: "60053",
        notes: "Need someone for this weekend only.",
        available: false,
        date: new Date(Date.now())

    }
    // {

    //     title: "House Cleaning",
    //     time: "10:00 am",
    //     zip: "60025",
    //     notes: "Only the hallway!",
    //     available: false,
    //     date: new Date(Date.now())
    // },
    // {

    //     title: "Walk the Dog",
    //     time: "11:00 am",
    //     zip: "60062",
    //     notes: "My dog needs some attention.",
    //     available: false,
    //     date: new Date(Date.now())
    // },
    // {

    //     title: "Ride to the doctor's office.",
    //     time: "9:00 am",
    //     zip: "60076",
    //     notes: "Drive me there.",
    //     available: false,
    //     date: new Date(Date.now())
    // },

    // {

    //     title: "Snow Shovel",
    //     time: "12:00 pm",
    //     zip: "60053",
    //     notes: "Front area only.",
    //     available: false,
    //     date: new Date(Date.now())
    // }
];

const googleSeed = [
    {
        googleId: 1,
        tokenId: 1,
        email: "eileen.j.sul@gmail.com",
        email_verified: true,
        name: "Eileen",
        picture: "eileen.jpg",
        given_name: "Eileen",
        family_name: "Sul",
        // locale: "en"
    }
];

db.Service
    .remove({})
    .then(() => db.Service.collection.insertMany(serviceSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Google
    .remove({})
    .then(() => db.Google.collection.insertMany(googleSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// db.Google
//     .remove({})
//     .collection.insertMany(googleSeed)
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });