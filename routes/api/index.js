const router = require("express").Router();
const serviceRoutes = require("./services");
const googleRoutes= require("./googlesignin");

// Service routes
router.use("/services", serviceRoutes);

// Google Sign In routes
router.use("/googlesignin", googleRoutes);

module.exports = router;
