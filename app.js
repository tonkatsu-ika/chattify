var express = require("express");
var app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public"));

app.use("/", require("./routes/index.js"));

app.listen(port, ()={
  console.log(`listening on ${port}`);
});
