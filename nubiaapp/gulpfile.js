// 1.引入模块
var gulp = require('gulp'),
    // 引入浏览器模块，并床架一个browser对象
    browser = require('browser-sync').create(),
    // 浏览器重新加载对象
    reload = browser.reload,
    // 引入sass模块
    sass = require('gulp-sass');

// 2.定义任务
gulp.task('server', function() {
    browser.init({
        // 服务器的根路径
        server: "./" // 将当前的路径设置为服务器的根路径
    });

    // 监听scss的变换
    gulp.watch('./assets/scss/*.scss', ['scss']).on('change', reload);
    // 监听HTML文件的变化
    gulp.watch('./*.html').on('change', reload);
})

// 定义编译scss的任务
gulp.task('scss', function() {
    gulp.src('./assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
});
