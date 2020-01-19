const router = require("express").Router();
const plantController = require("../../controllers/plantsController");

router.route("/create")
    .post(plantController.create);


router.route("/:id")
    .post(plantController.waterPlant);


module.exports = router;