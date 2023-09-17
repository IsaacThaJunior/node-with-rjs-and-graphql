const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id) {
    fs.readFile(p, (err, fileData) => {
      let cart = { products: [], totalPeice: 0 };

      if (!err) {
        cart = JSON.parse(fileData);
      }

      const productExists = cart.products.find((prod) => prod.id === id);
      let updatedProduct;
      if (productExists) {
        updatedProduct = { ...productExists };
        updatedProduct.qty = updatedProduct.qty + 1;
      } else {
        updatedProduct = { id: id, qty: 1 };
      }
    });
  }
};
