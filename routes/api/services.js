const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

// Matches with "/api/services"
router.route("/")
  .get(servicesController.findAll)


// Matches with "/api/services/:id"
router
  .route("/:id")
  .get(servicesController.findById)
  .put(servicesController.update)
  .delete(servicesController.remove)
  .post(servicesController.create);
  router
  .route("/sendemail/:mail")
  .post(servicesController.findemail);

module.exports = router;
