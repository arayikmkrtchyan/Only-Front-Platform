module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    concat: {
      js: {
        files: [
          {
            src: [
              'ng/app.js'
              , 'ng/directives/*.js'
              , 'ng/factory/pubsub.js'
              , 'ng/factory/connector.js'
            ],
            dest: 'js/app.js'
          }
        ]
      }
    },
    uglify: {
      js: {
        files: [
          {
            src: ['js/app.js'],
            dest: 'js/app.min.js'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify']);

};
