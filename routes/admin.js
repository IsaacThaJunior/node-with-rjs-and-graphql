const path = require("path");

const express = require("express");

const {
  getAddProduct,
  getProducts,
  postAddProduct,
} = require("../controller/admin");

const router = express.Router();

router.get("/add-product", getAddProduct);

// /admin/products => GET
router.get("/products", getProducts);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

module.exports = router;
