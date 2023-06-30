const express = require("express");

const router = express.Router();

const modelControllers = require("./controllers/modelControllers");

router.get("/models", modelControllers.browse);
router.get("/models/:id", modelControllers.read);
router.put("/models/:id", modelControllers.edit);
router.post("/models", modelControllers.add);
router.delete("/models/:id", modelControllers.destroy);

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.put("/products/:id", productControllers.edit);
router.post("/products", productControllers.addProductAndModel);
router.delete("/products/:id", productControllers.destroy);

module.exports = router;
