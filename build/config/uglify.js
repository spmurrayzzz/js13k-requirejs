module.exports = {
  options: {
    mangle: true
  },
  my_target: {
    files: {
      'dist/js/app.min.js': ['dist/js/app.js']
    }
  }
}
