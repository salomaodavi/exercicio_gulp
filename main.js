const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Altere para o caminho do seu SASS
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para otimizar imagens
gulp.task('images', function() {
    return gulp.src('src/images/**/*') // Altere para o caminho das suas imagens
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para minificar JavaScript
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js') // Altere para o caminho do seu JavaScript
        .pipe(concat('all.js')) // Junta todos os arquivos
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa as outras
gulp.task('default', gulp.series('sass', 'images', 'scripts'));
