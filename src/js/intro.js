(function ( root, factory ) {
  if ( typeof define === 'function' && define.amd ) {
    define( [], factory );
  } else {
    root.App = factory();
  }

}( this, function () {

  'use strict';
