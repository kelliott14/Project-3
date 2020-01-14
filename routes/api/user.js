const router = require("express").Router();
const userController = require("../../controllers/usersController");

router.route("/")
    .post(userController.create);

    router.router("/:id")
    .get(userController.findById)
    .put(userController.update);

module.exports = router;