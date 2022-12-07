 const router = require("express").Router();
 let userController = require("../controller/region");
 const authenticateToken = require("../middleware/auth");

 router.post("/addRegion", authenticateToken, userController.addRegion);
 router.get("/getRegions", authenticateToken, userController.getRegions);
 router.delete("/deleteRegion/:regionID", authenticateToken, userController.deleteRegion);
 router.put("/updateRegion", authenticateToken, userController.updateRegion);
 router.get("/getRegion/:regionID", authenticateToken, userController.getRegion);

 module.exports = router;