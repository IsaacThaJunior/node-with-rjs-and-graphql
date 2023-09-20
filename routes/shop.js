const path = require("path");

const express = require("express");

const {
  getCart,
  getCheckout,
  getIndex,
  getProducts,
  getOrders,
  getProduct,
  postCart,
} = require("../controller/shop");

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.post("/cart", postCart)

router.post("/cart-delete/item", postCart)

// handling dynamic data
router.get("/products/:productId", getProduct);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
