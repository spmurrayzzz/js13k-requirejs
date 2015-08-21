define([
  'src/js/vendor/eventemitter',
  'src/js/lib/vent'
],

function(
  EventEmitter,
  vent
) {

  var BaseClass = function() {};

  function extend( target ) {
    var superProto = this.prototype || {},
      proto = Object.create( superProto );

    Object.keys( target ).forEach(function( key ) {
      if ( target.hasOwnProperty( key ) ) {
        proto[ key ] = target[ key ];
      }
    });

    function Base() {
      this.vent = vent;
      EventEmitter.call( this );
      if ( typeof this.init === 'function' ) {
        this.init.apply( this, arguments );
      }
    }

    Base.extend = extend;
    Base.prototype = proto;
    Base.prototype.constructor = Base;

    return Base;
  }

  return extend.call( BaseClass, EventEmitter.prototype );

});
