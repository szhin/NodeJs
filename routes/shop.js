//create path
const path = require("path");

const express = require("express");

//get path all system (macos, window, ..)
const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
