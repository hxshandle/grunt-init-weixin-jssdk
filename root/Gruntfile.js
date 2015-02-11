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
          'public/js/vendor/bower.min.js': ['dist/_bower.js']
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
    },
    copy:{
      main:{
        files:[
          // copy borwer css
          {expand: true, src: ['dist/_bower.css'], dest: 'public/css/bower.css'},
        ]
      }
    },
    jade: {
      compile: {
        options: {
          pretty:true
        },
        files: [{
          expand: true,
          cwd:"src/jade",
          src:"**/[^_]*.jade",
          dest:"public",
          ext:".html"
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['**/[^_]*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-bower-concat');
  

  // Default task.
  //grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify']);
  grunt.registerTask('default', ['clean','bower','bower_concat','jshint' , 'uglify','jade','sass']);

};