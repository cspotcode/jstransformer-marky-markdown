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

## License

MIT
