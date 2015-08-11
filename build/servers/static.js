var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(function( req, res, next ) {
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Headers', 'X-Requested-With' );
  res.header( 'Access-Control-Allow-Headers', 'Content-Type' );
  res.header( 'Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS' );
  next();
});

app.use( bodyParser.json() );

app.use( '/', express.static( path.resolve( __dirname, '../..' ) ) );
app.listen( 8675 );

console.log('Server started');
