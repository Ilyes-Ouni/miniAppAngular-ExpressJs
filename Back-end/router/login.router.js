const router = require("express").Router();
let userController = require("../controller/login");

router.post("/login", userController.login);

module.exports = router;