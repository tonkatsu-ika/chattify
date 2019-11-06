var express = require("express");
var router = express.Router();

router.get("/chats", (req, res)=>{
  res.render("./chats/sample.ejs");
});

module.exports = router;
