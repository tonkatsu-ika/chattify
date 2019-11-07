var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
const port = process.env.PORT || 3000;

var buildMode = process.env.NODE_ENV === "development" ? "development" : "production";
var staticFilePath = __dirname + "/public/" + buildMode;

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(staticFilePath));

app.use("/", require("./routes/index.js"));
app.use("/chats/sample.html", require("./routes/index.js"));

io.on("connection", function(socket){
  socket.on("message", function(msg){
    console.log("message: " + msg);
    io.emit("message", msg);
  });
});

http.listen(port, ()=>{
  console.log(`listening on ${port}`);
  console.log(`buildMode: ${buildMode}`);
});
