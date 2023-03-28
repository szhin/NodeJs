//create path
const path = require("path");

const express = require("express");

//get path all system (macos, window, ..)
const rootDir = require("../util/path");

//create router
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, text) => {
  //get path all system (macos, window, ..)
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, text) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
