const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/googlesignin"
router.route("/")
  .get(googleController.findAll)
  .post(googleController.create);

// Matches with "/api/googlesignin/:id"
router.route("/:id")
  .get(googleController.findById);
//   .put(googleController.update)
//   // .delete(googleController.remove);

module.exports = router;