const path = require("path");

const express = require("express");

const {
  getAddProduct,
  getProducts,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  deleteProduct,
} = require("../controller/admin");

const router = express.Router();

router.get("/add-product", getAddProduct);

// /admin/products => GET
router.get("/products", getProducts);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

router.get("/edit-product/:productId", getEditProduct);

router.post("/edit-product/", postEditProduct);
router.post("/delete-product/", deleteProduct);

module.exports = router;
