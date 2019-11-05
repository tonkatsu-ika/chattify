var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

gulp.task("copy-javascripts.clean", (done)=>{
  return del("./javascripts/**/*", { cwd: config.path.output });
  done();
});

gulp.task("copy-javascripts.copy", (done)=>{
  gulp.src("./javascripts/**/*", { cwd: config.path.input }) 
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
  done();
});

gulp.task("copy-javascripts",
  gulp.series(
    "copy-javascripts.clean",
    "copy-javascripts.copy"
  )
);

