var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");
var uglify = require("gulp-uglify");

gulp.task("minify-javascripts.clean", (done)=>{
  return del("./javascripts/**/*", { cwd: config.path.output })
});

gulp.task("minify-javascripts.copy", (done)=>{
  return gulp.src("./javascripts/**/*", { cwd: config.path.input})
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
  done();
});

gulp.task("minify-javascripts", 
  gulp.series(
    "minify-javascripts.clean",
    "minify-javascripts.copy"
  )
);
