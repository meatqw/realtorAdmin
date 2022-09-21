const Router = require("express");
const router = new Router();
const authController = require("../controller/auth.controller");


router.get("/protected", authController.ensureToken, authController.protected);
router.get("/login", authController.login);

module.exports = router;