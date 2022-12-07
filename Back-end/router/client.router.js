const router = require("express").Router();
let userController = require("../controller/client");
const authenticateToken = require("../middleware/auth");

router.post("/addClient", authenticateToken, userController.addClient);
router.get("/getClients", authenticateToken, userController.getClients);
router.delete("/deleteClient/:clientID", authenticateToken, userController.deleteClient);
router.put("/updateClient", authenticateToken, userController.updateClient);
router.get("/getClient/:clientID", authenticateToken, userController.getClient);

module.exports = router;