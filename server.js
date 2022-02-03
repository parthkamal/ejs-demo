const express = require("express");
const app = express();
// adding template engine to the node server
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));


app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
