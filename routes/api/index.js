const router = require("express").Router();
const serviceRoutes = require("./services");

// Service routes
router.use("services", serviceRoutes);

module.exports = router;
