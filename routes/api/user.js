const router = require("express").Router();
const userController = require("../../controllers/usersController");

router.route("/create")
    .post(userController.create);

router.route("/login")
    .post(userController.findOne);

router.route("/:id")
    .get(userController.findById)
    .post(userController.update)
    .put(userController.update);



module.exports = router;