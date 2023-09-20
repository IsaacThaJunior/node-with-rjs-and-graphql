const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, priceOfProduct) {
    fs.readFile(p, (err, fileData) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(fileData);
      }

      const productExistsAtIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const productExists = cart.products[productExistsAtIndex];
      let updatedProduct;
      if (productExists) {
        updatedProduct = { ...productExists };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[productExistsAtIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +priceOfProduct;
      fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err));
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileData) => {
      if (err) return;

      const updatedCart = { ...JSON.parse(fileData) };
      console.log("first one", "snapping one 2");

      console.log(updatedCart);
      console.log(updatedCart.products);

      const chechDeletedProduct = updatedCart.products.find(
        (product) => product.id === id
      );
      console.log("snapping one 2");

      const productQuantity = chechDeletedProduct.qty;

      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );

      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQuantity;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => console.log(err));
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileData) => {
      const cart = JSON.parse(fileData);
      if (err) {
        cb(null);
      }
      cb(cart);
    });
  }
};
