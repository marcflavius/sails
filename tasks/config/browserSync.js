module.exports = function (grunt) {

  grunt.config.set('browserSync', {
    dev: {
      bsFiles: {
        src: '**/*'
      },
      options: {
        // When your app also uses web sockets
        // NOTE: requires 2.8.1 or above
        proxy: {
          target: "http://localhost:1337",
          ws: true
        },
        watchTask: true,
        reloadOnRestart: false,
        open: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
};
