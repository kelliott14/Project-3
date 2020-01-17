const router = require("express").Router();
const userRoutes = require("./user");
const plantRoutes = require("./plant");

router.use("/users", userRoutes);
router.use("/plants", plantRoutes);

module.exports = router;