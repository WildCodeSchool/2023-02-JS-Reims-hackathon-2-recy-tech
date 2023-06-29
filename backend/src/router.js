const express = require("express");

const router = express.Router();

const modelControllers = require("./controllers/modelControllers");

router.get("/models", modelControllers.browse);
router.get("/models/:id", modelControllers.read);
router.put("/models/:id", modelControllers.edit);
router.post("/models", modelControllers.add);
router.delete("/models/:id", modelControllers.destroy);

module.exports = router;
