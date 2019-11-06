var express = require("express");
var app = express();
const port = process.env.PORT || 3000;

var buildMode = process.env.NODE_ENV === "development" ? "development" : "production";
var staticFilePath = __dirname + "/public/" + buildMode;

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(staticFilePath));

app.use("/", require("./routes/index.js"));

//app.get("/chats/sample.html", (req, res)=>{
//  res.render("./chats/sample");
//});

app.use("/chats/sample.html", require("./routes/index.js"));

app.listen(port, ()=>{
  console.log(`listening on ${port}`);
  console.log(`buildMode: ${buildMode}`);
});
