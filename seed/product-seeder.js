var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping");

var product = [
  new Product({
    imagePath:
      "https://p.ipricegroup.com/1c915150fb4d1f38984d1ecc4a8f7501c758a7eb_0.jpg",
    title: "Kitkat Green Tea",
    description: "35g (4pcs)",
    price: 45000
  }),
  new Product({
    imagePath:
      "https://p.ipricegroup.com/2f585c9a592baa9406fd2d3837596196076600f6_0.jpg",
    title: "Kitkat Multipack",
    description: "6 Pack (2 pcs)",
    price: 54000
  }),
  new Product({
    imagePath:
      "https://p.ipricegroup.com/d7996f7b1a42bfff31ead99bae5b25f54788ffa5_0.jpg",
    title: "Kitkat Raspberry",
    description: "Isi 12",
    price: 75000
  }),
  new Product({
    imagePath:
      "https://p.ipricegroup.com/0c0e44ee8631e04fadbe2d3dae1925ca08a98171_0.jpg",
    title: "Kitkat Dark Chocolate",
    description: "Isi 13 pack",
    price: 75000
  }),
  new Product({
    imagePath:
      "https://p.ipricegroup.com/d0ba83985bbb3d19e1cbf1d43878ea019d056c31_0.jpg",
    title: "Kitkat Mini Hazelnut",
    description: "10 pcs",
    price: 78000
  })
];

var done = 0;
for (var i = 0; i < product.length; i++) {
  product[i].save(function(err, result) {
    done++;
    if (done === product.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
