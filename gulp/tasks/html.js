import fileinclude from "gulp-file-include"
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'

export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>'
         })
      ))
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(webpHtmlNoSvg())
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
}