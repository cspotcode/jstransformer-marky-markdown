# jstransformer-marky-markdown

[marky-markdown](https://github.com/npm/marky-markdown) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/cspotcode/jstransformer-marky-markdown/master.svg)](https://travis-ci.org/cspotcode/jstransformer-marky-markdown)
[![Coverage Status](https://img.shields.io/codecov/c/github/cspotcode/jstransformer-marky-markdown/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-marky-markdown)
[![Dependency Status](https://img.shields.io/david/cspotcode/jstransformer-marky-markdown/master.svg)](http://david-dm.org/jstransformers/jstransformer-marky-markdown)
[![NPM version](https://img.shields.io/npm/v/jstransformer-marky-markdown.svg)](https://www.npmjs.org/package/jstransformer-marky-markdown)

## Installation

    npm install jstransformer-marky-markdown

## API

```js
var md = require('jstransformer')(require('jstransformer-marky-markdown'));

md.render('# Hello World!').body;
//=> '<h1>Hello World!</h1>'
```

### Plugins

Plugins in [markdown-it](https://github.com/markdown-it/markdown-it) (the underlying markdown renderer for marky-markdown) are applied with the `.use` function:

```js
var md = require('markdown-it')();
md.use(require('plugin1'));
md.use(plugin2);
md.use(plugin3, opts, ...);
md.use(require('plugin4'), opts, ...);
```

jstransformer-marky-markdown allows doing the same through the `plugins` option:

```js
var md = require('jstransformer')(require('jstransformer-marky-markdown'));

md.render(markdown, {
  plugins: [
    'plugin1',
    plugin2,
    [plugin3, opts, ...],
    ['plugin4', opts, ...]
  ]
}).body;
```

If an element of the `plugins` array is a string, it is `require`d. If an element is an array, the first element will represent the plugin, while the rest are treated as options to that plugin.

### Rules

markdown-it allows enabling and disabling specific rules through `md.disable` and `.enable` functions:

```js
var md = require('markdown-it')();
md.disable([ 'link', 'image' ]);
md.disable('backticks');
md.disable('might-not-exist', true);
md.enable('might-not-exist2', true);
```

In jstransformer-marky-markdown, the same thing can be done with the `enable` and `disable` options, with slightly modified syntax:

```js
var md = require('jstransformer')(require('jstransformer-marky-markdown'));

md.render(markdown, {
  disable: [
    'link',
    'image',
    'backticks',
    ['might-not-exist', true]
  ],
  enable: [
    ['might-not-exist2', true]
  ]
}).body;
```

## License

MIT
