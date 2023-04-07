//create path
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//import routes file
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Create path link file css
app.use(express.static(path.join(__dirname, "public")));

//get all file router called
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404  );

app.listen(3001);
