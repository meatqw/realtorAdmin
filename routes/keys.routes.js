const Router = require("express");
const router = new Router();
const keysController = require("../controller/keys.controller");

router.post("/keys", keysController.create);
router.get("/keys", keysController.all);
router.get("/keys/:id", keysController.get);
router.put("/keys", keysController.update);
router.delete("/keys/:id", keysController.delete);

module.exports = router;
