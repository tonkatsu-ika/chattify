var router = require("express").Router();

router.get("/", (req, res)=>{
  res.render("./index.ejs");
});

router.get("/chats/*", (req, res)=>{
  res.render("./chats/sample.ejs");
});

module.exports = router;
