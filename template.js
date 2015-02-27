/*
 * grunt-init-weixin-jssdk
 * https://gruntjs.com/
 *
 * Copyright (c) 2015 "Handle" Handle Huang, contributors
 * Licensed under the MIT license.
 */
'use strict';
exports.description = 'Create a weixin project base on weixin JS SDK';
exports.notes = 'project notes is empty';
exports.after = 'You should now install project dependencies with _npm ' + 'install_. After that, you may execute project tasks with _grunt_. For ' + 'more information about installing and configuring Grunt, please see ' + 'the Getting Started guide:' + '\n\n' + 'http://gruntjs.com/getting-started';
// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name'),
    init.prompt('description', 'The best weixin project ever.'),
    init.prompt('version'),
    init.prompt('repository',"git://github.com/hxshandle/"),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);
    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);
    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'lib/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      version: '0.1.1',
      npm_test: 'grunt',
      scripts:{
        "start": "node server.js"
      },
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      dependencies: {
          "node-static": "^0.7.6"
      },
      devDependencies: {
        'grunt-contrib-jshint': '~0.11.0',
        'grunt-contrib-concat': '~0.5.0',
        'grunt-contrib-jade ':'~0.14.0',
        'grunt-contrib-uglify': '~0.4.0',
        'grunt-contrib-watch': '~0.4.0',
        'grunt-contrib-sass': '~0.9.2',
        'grunt-contrib-clean': '~0.4.0',
        'grunt-contrib-copy': '~0.7.0',
        'grunt-bower-task': '~0.4.0',
        'grunt-bower-concat': '~0.4.0',
        "gulp-jade": "^0.11.0",
        "gulp": "~3.8.10",
        "gulp-ruby-sass": "~0.7.1",
      },
    });
  });
}