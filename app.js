//create path
const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

//import routes file
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Create path link file css
app.use(express.static(path.join(__dirname, "public")));

//get all file router called
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //get path all system (macos, window, ..)
  res.status(404).sendFile(path.join(__dirname, "./views", "404.html"));
});

app.listen(3001);
