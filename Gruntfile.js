module.exports = function( grunt ) {

  grunt.initConfig({
    // read package.json
    pkg: grunt.file.readJSON('package.json'),
    // linting
    jshint: require('./build/config/jshint'),
    // concat files
    concat: require('./build/config/concat'),
    // minify js
    uglify: require('./build/config/uglify'),
    // copy files
    copy: require('./build/config/copy'),
    // requirejs optimizer
    requirejs: require('./build/config/requirejs'),
    // test server
    express: require('./build/config/express'),
    // watch config
    watch: require('./build/config/watch')
  });

  // load npm plugins (all dependencies that match /^grunt/)
  require('load-grunt-tasks')( grunt );

  // load custom tasks
  grunt.loadTasks('./build/tasks');

};
