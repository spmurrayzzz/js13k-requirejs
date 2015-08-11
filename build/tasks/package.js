var fs = require('fs'),
  path = require('path'),
  Zip = require('adm-zip');

function distPath() {
  var args = Array.prototype.slice.call( arguments );
  args.unshift('./dist');
  return path.join.apply( path, args );
}

module.exports = function( grunt ) {
  grunt.registerTask( 'package', function( done ) {
    var jsString, cssString, done = this.async();

    jsString = fs.readFileSync( distPath('js/app.min.js') ).toString('utf8');
    jsString = '<script>' + jsString + '</script>';

    cssString = fs.readFileSync( distPath('css/app.css') ).toString('utf8');
    cssString = '<style>' + cssString + '</style>';

    fs.readFile( distPath('index.html'), function( err, item ) {
      if ( err ) {
        throw err;
      }

      var data = item.toString('utf8')
        .replace(/\<script src=\"js\/app\.min\.js\"\>\<\/script\>/g, jsString )
        .replace(
          /\<link href=\"css\/app.css\" rel=\"stylesheet\" type=\"text\/css\"\>/g,
          cssString
        );

      fs.writeFile( './compressed/index.html', data, function( err ) {
        var zip;

        if ( err ) {
          throw err;
        }

        zip = new Zip();
        zip.addLocalFile('./compressed/index.html');
        zip.writeZip('./compressed/index.html.zip');

        done();
      });
    });
  });
}
