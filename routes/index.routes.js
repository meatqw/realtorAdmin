const Router = require("express");
const router = new Router();
const indexController = require("../controller/index.controller");


router.get("*", indexController.render);

module.exports = router;