module.exports = {
  target: {
    files: [
      {
        src: [ 'src/index.html' ],
        dest: 'dist/index.html'
      },
      {
        expand: true,
        cwd: 'src/img/',
        src: ['**'],
        dest: 'dist/img/',
        filter: 'isFile'
      }
    ],
    options: {
      noProcess: ['**/*.{png,gif,jpg,ico,svg,ttf,eot,woff}']
    }
  }
};
