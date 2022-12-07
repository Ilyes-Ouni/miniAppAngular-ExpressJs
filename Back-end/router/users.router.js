const router = require("express").Router();
const userController = require("../controller/users");
const authenticateToken = require('../middleware/auth')

router.get("/getUser", authenticateToken, userController.getUser);
router.get("/checkUser", authenticateToken, userController.checkUser);


module.exports = router;