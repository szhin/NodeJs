//create path
const path = require("path");

const express = require("express");

//get path all system (macos, window, ..)
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  //get path all system (macos, window, ..)
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
