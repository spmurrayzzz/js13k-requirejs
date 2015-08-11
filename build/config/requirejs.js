module.exports = {
  compile: {
    options: {
      baseUrl: './',
      mainConfigFile: 'src/js/config.js',
      include: [ 'src/js/index' ],
      name: 'node_modules/almond/almond.js',
      out: 'dist/js/app.js',
      generateSourceMaps: true,
      wrap: {
        startFile: 'src/js/intro.js',
        endFile: 'src/js/outro.js',
      },
      optimize: 'none'
    }
  }
};
