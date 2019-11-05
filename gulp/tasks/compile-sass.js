var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");

gulp.task("compile-sass.clean", (done)=>{
  return del("./stylesheets/**/*", { cwd: config.path.output })
});

gulp.task("compile-sass.copy", (done)=>{
  return gulp.src("./stylesheets/**/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(gulp.dest("./stylesheets", { cwd: config.path.output }));
  done();
});

gulp.task("compile-sass", 
  gulp.series(
    "compile-sass.clean",
    "compile-sass.copy"
  )
);
