# js13kgames template

This repo houses a barebones structure for building games for the
js13kgames.come competition — with an opinionated structure favoring
`requirejs` for dependency management.

## Getting started

```
sudo npm install -g grunt-cli
npm install
```

## Run the full build

```
grunt
```

## Start a local static server for development

```
grunt express:dev
```

This launches a server @ http://localhost:8675/

```
grunt watch
```

This will auto-build each time a source file changes.

## Built-in classes

- Event emitter abstraction

Ex:
```js
define([
  'src/js/vendor/eventemitter'
],

function(
  EventEmitter
) {

  var emitter = new EventEmitter();

  emitter.on( 'foo', function() {
    console.log('a wild foo appeared!');
  });

  emitter.emit('foo');

  emitter.off('foo');

});
```

- Classical inheritance via `BaseClass`

Ex
```js
define([
  'src/js/classes/base'
],

function(
  BaseClass
) {

  var Something = BaseClass.extend({

    // Init runs automatically on construction
    init: function( name ) {
      console.log('initialized! ' + name );
      this.boom( name );
    }

  });

  var SomethingElse = Something.extend({

    boom: function( name ) {
      console.log( name + ' went boom' );
    }

  });

  var foo = new SomethingElse('Miley'); // initialized! Miley, Miley went boom

});
```

Additionally, a singleton event emitter is attached to each object instance (eg: `this.vent`). This object listens to all stages of the game loop, eg: `this.vent.on('render'...`

## What the build step does

- Runs JSHint on all src files
- Concatenates all JS and CSS
- Creates new `require`-friendly build artifact using Almond.js
- Minifies JS artifact via `uglify`
- Replaces `<link>` and `<script>` tags in `index.html` by inlining CSS and JS (this yields a net benefit for the zip step)

This results in a single `compressed/index.html` file which houses the entire
application. Additionally, the build will output a zip `compressed/index.html.zip`

Current output size: `2KB zipped/compressed`
