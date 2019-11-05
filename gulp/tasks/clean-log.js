var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

gulp.task("clean-log", (done)=>{
  return del("./**/*", { cwd: config.path.log })
});
