// const router = require("express").Router();
import axios from "axios";

const BASEURL = "https://www.zipcodeapi.com/rest/GaufizMLSvdzZfMvgs72U1RWprK4SZKCTKRvVYkqC2gDp1aZsoLA175LS51bQ4mn/state-zips.json/il";
const APIKEY = "&api_key=GaufizMLSvdzZfMvgs72U1RWprK4SZKCTKRvVYkqC2gDp1aZsoLA175LS51bQ4mn&limit=20";

// Export an object with a "search" method that searches the zipcodes for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};





// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;
