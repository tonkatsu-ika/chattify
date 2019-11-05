var gulp = require("gulp");

gulp.task("default", (done)=>{
  console.log(process.env.NODE_ENV);
  done();
});
