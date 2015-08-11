module.exports = {
  test: {
    options: {
      script: 'build/servers/static.js',
      background: true
    }
  },
  dev: {
    options: {
      script: 'build/servers/static.js',
      background: false
    }
  }
};
