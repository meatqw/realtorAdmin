const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.post("/user", userController.create);
router.get("/user", userController.all);
router.get("/user/:id", userController.get);
router.put("/user", userController.update);
router.delete("/user/:id", userController.delete);

module.exports = router;
