const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "peoduct.json"
);

const getProfuctcFromFile = (cb) => {
  fs.readFile(p, (err, fileData) => {
    if (err) {
      console.log("the error:", err);
      return cb([]);
    }
    cb(JSON.parse(fileData));
  });
};

module.exports = class Peoduct {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProfuctcFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProfuctcFromFile(cb);
  }

  static findById(id, cb) {
    getProfuctcFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
