const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const ProductController = require("../controller/ProductController.js");

router.get("/listProducts/:reference", ProductController.listProducts);

router.post("/newProduct", ProductController.createProduct);
router.post("/findProduct/:id", ProductController.findProduct);
router.post(
  "/saveProductImage/:id/:refImg",
  multer(multerConfig).single("file"),
  ProductController.saveProductImage
);

module.exports = router;
