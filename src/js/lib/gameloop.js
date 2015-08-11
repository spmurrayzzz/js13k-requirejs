define([
  'src/js/lib/vent'
],

function(
  vent
) {

  var raf = window.requestAnimationFrame,
    paused = false;

  /**
   * Primary game frame tick, emit global events
   * @return {void}
   */
  function step() {
    vent.emit('update');
    vent.emit('before-render');
    vent.emit('render');
    vent.emit('after-render');
    vent.emit('debug');
    if ( !paused ) {
      raf( step );
    }
  }

  function pause() {
    paused = !paused;
  }

  vent.on( 'start', step );
  vent.on( 'pause', pause );

  return {
    start: function() {
      paused = false;
      step();
    },
    pause: pause
  };

});
