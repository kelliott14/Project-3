const router = require("express").Router();
const plantController = require("../../controllers/plantsController");

router.route("/create")
    .post(plantController.create);


module.exports = router;