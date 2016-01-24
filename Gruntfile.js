module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  function initConfig(project) {
    return {
      concat: {
        js: {
          files: [
            {
              src: [
                'ng/app.js'
                , 'ng/route.js'
                , 'projects/' + project + '/route.js'
                , 'ng/factory/PubSub.js'
                , 'ng/factory/Connector.js'
                , 'ng/interceptors/**.js'
                , 'ng/directives/**.js'
                , 'ng/services/**.js'
                , 'ng/controllers/**.js'
                // project files
                , 'projects/' + project + 'directives/**.js'
                , 'projects/' + project + 'services/**.js'
                , 'projects/' + project + 'controllers/**.js'
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
      },
      clean: {
        templates: ["templates"],
        scripts: ["js"],
        css: ["css"],
        all: ["templates", "js", "css"]
      },
      copy: {
        templates: {
          expand: true,
          cwd: "ng/templates",
          src: "**",
          dest: 'templates/',
          //flatten: true,
          filter: 'isFile'
        },
        projectTemplates: {
          expand: true,
          cwd: "projects/" + project + "/templates",
          src: "**",
          dest: 'templates/',
          //flatten: true,
          filter: 'isFile'
        }
      },
      watch: {

        scripts: {
          files: ['**/*.js'],
          tasks: ['concat', 'uglify']
        },

        templates: {
          files: ['**/*.html'],
          tasks: ['copy:templates', 'copy:projectTemplates']
        }

      }

    };
  }

  grunt.registerTask('default', function (projectName) {

  });

  grunt.registerTask('dev', function (projectName) {

    grunt.initConfig(initConfig(projectName));

    grunt.task.run('clean:scripts');
    grunt.task.run('concat');
    grunt.task.run('uglify');


    grunt.task.run('clean:templates');
    grunt.task.run('copy:templates');
    grunt.task.run('copy:projectTemplates');

    grunt.task.run('watch');

  });

  grunt.registerTask('deploy', function (projectName) {

    grunt.initConfig(initConfig(projectName));

    grunt.task.run('clean:templates');
    grunt.task.run('copy:templates');
    grunt.task.run('copy:projectTemplates');

    grunt.task.run('concat');
    grunt.task.run('uglify');

  });

};
