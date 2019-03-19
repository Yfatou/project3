const router = require("express").Router();
const zipRoutes = require("./zipRoute");

// Book routes
router.use("/zipRoute", zipRoutes);

module.exports = router;
