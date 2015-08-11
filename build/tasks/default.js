module.exports = function( grunt ) {

  grunt.registerTask( 'default', [
    'jshint',
    'concat',
    'copy',
    'requirejs',
    'uglify',
    'package'
  ]);

};
