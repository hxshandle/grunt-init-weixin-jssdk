'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
    clean: {
      files: ['dist']
    },
    uglify: {
      options: {
        mangle:false,
        sourceMap:false
      },
      my_target:{
        files:{
          'dist/bower.min.js': ['dist/_bower.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    bower:{
      install:{
        //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory 
      }
    },
    bower_concat:{
      all:{
        dest:"dist/_bower.js",
        cssDest:"dist/_bower.css",
        dependencies:{
          "lodash":["jquery","modernizr"]
        },
        bowerOptions: {
          relative: false
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-bower-concat');
  

  // Default task.
  //grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify']);
  grunt.registerTask('default', ['clean','bower','bower_concat','jshint' , 'uglify']);

};