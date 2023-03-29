//create path
const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

//import routes file
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Create path link file css
app.use(express.static(path.join(__dirname, "public")));

//get all file router called
app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  //get path all system (macos, window, ..)
  res.status(404).render("404", { pageTitle: "404 Page" });
});

app.listen(3001);
