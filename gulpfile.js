
/* jshint node:true */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Bundle files with browserify
gulp.task('browserify', function () {
  // set up the browserify instance on a task basis
  var bundler = browserify({
    entries: 'app/scripts/app.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  bundler = watchify(bundler);

  var rebundle = function() {
    return bundler.bundle()
      .on('error', function (err) {
        console.log('Error: ' + err.message);
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .on('error', $.util.log)
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp/scripts'));
  }

  bundler.on('update', rebundle);

  return rebundle();
});

// Bundle files for distribuition
gulp.task('browserify:dist', function () {
  // set up the browserify instance on a task basis
  var bundler = browserify({
    entries: 'app/scripts/app.js',
    debug: false,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe($.uglify())
    .on('error', $.util.log)
    .pipe(gulp.dest('dist/scripts'));
});

// Run the twitter stream server
gulp.task('twitter:server', function () {
  $.nodemon({
    script: './server.js',
    watch: [
      'server.js',
      'twitterCredentials.json'
    ]
  });
});

// Lint Javascript
gulp.task('jshint', function () {
  return gulp.src([
    'app/scripts/**/*.js',
    'test/**/*.js',
    '!app/scripts/**/__tests__/*',
    '!app/scripts/vendor/**/*.js'
  ])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

// Copy web fonts to dist
gulp.task('fonts', function () {
  return gulp.src([
    'app/{,styles/}fonts/**/*'
  ])
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

// Compile and automatically prefix stylesheets
gulp.task('styles', function () {
  return gulp.src('app/styles/main.css')
    .pipe($.sourcemaps.init())
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({ stream: true }));
});

// Scan your HTML for assets & optimize them
gulp.task('html', ['styles'], function () {
  var assets = $.useref.assets({ searchPath: ['.tmp', 'app', '.'] });

  return gulp.src('app/*.html')
    .pipe($.htmlReplace({ js: ['scripts/app.js' ] }))
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({ conditionals: true, loose: true })))
    .pipe(gulp.dest('dist'));
});

// Clean output directory and cached images
gulp.task('clean', function (callback) {
  var del = require('del');
  del(['.tmp', 'dist'], function () {
    $.cache.clearAll(callback);
  });
});

// Copy assets to distribution path
gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

// Run tests and report for ci
gulp.task('test', function(callback) {
  return gulp.src('app/scripts/**/__tests__')
    .pipe($.jest({
      scriptPreprocessor: __dirname + '/node_modules/babel-jest',
      unmockedModulePathPatterns: [
        __dirname + '/node_modules/react',
        __dirname + '/node_modules/react-tools'
      ],
      moduleFileExtensions: ['js', 'json', 'jsx']
    }));
});

// Run test in tdd mode
gulp.task('tdd', ['test'], function(callback) {
  gulp.watch('app/scripts/**/*.js', ['test']);
});

// Run development server environmnet
gulp.task('serve', ['browserify', 'styles', 'twitter:server'], function () {
  browserSync({
    notify: false,
    port: 9000,
    ui: {
      port: 9001
    },
    server: {
      baseDir: ['.tmp', 'app', 'node_modules/bootstrap/dist'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/scripts/**/*.js',
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.css', ['styles']);
});

// Run web server on distribution files
gulp.task('serve:dist', ['twitter:server'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

// Build the project for distribution
gulp.task('build', ['jshint', 'browserify:dist', 'html', 'images', 'fonts', 'extras'], function () {
  var size = $.size({title: 'build', gzip: true });
  return gulp.src('dist/**/*')
    .pipe(size)
    .pipe($.notify({
      onLast: true,
      title: 'Build complete',
      message: function() {
        return 'Total scripts size (gzip) ' + size.prettySize;
      }
    }));
});

// Clean all and build from scratch
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
