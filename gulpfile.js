
    var gulp = require('gulp'); 
    gulp.task('build', function() {
        gulp.src('pages/*.html')
            .pipe(build({ title: 'Some page' }, options))
            .pipe(gulp.dest('dist'))
      });

