//create path
const path = require("path");

const express = require("express");

//get path all system (macos, window, ..)
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //get path all system (macos, window, ..)
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
