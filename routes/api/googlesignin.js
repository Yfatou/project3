const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/services"
router.route("/")
  .get(googleController.findAll)
  .post(googleController.create);

// Matches with "/api/services/:id"
// router
//   .route("/:id")
//   // .get(googleController.findById)
//   .put(googleController.update)
//   // .delete(googleController.remove);

module.exports = router;