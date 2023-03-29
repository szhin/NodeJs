//create path
const path = require("path");

const express = require("express");

//get path all system (macos, window, ..)
const rootDir = require("../util/path");

//create router
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, text) => {
  //get path all system (macos, window, ..)
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, text) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
