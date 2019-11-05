var config = require("./gulp/config.js");
var gulp = require("gulp");
var load = require("require-dir");

load("./gulp/tasks", { recurse: true });

var taskForJavascripts = config.env.IS_DEVELOPMENT ? "copy-javascripts" : "minify-javascripts";

gulp.task("default", 
  gulp.series(
    "copy-images",
    taskForJavascripts,
    "compile-sass"
  )
); 
