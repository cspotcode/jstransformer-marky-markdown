'use strict'

var markyMarkdown = require('marky-markdown')

exports.name = 'marky-markdown'
exports.outputFormat = 'html'
exports.inputFormats = ['marky-markdown', 'markdown', 'md']
exports.render = function (str, options) {
  options = options || {}
  var md = markyMarkdown.getParser()

  // Parse the plugins.
  (options.plugins || []).forEach(function (plugin) {
    if (!Array.isArray(plugin)) {
      plugin = [plugin]
    }

    if (typeof plugin[0] === 'string') {
      // eslint-disable-next-line import/no-dynamic-require
      plugin[0] = require(plugin[0])
    }

    md.use.apply(md, plugin)
  });

  // Parse enable/disable rules.
  (options.enable || []).forEach(function (rule) {
    md.enable.apply(md, Array.isArray(rule) ? rule : [rule])
  });

  (options.disable || []).forEach(function (rule) {
    md.disable.apply(md, Array.isArray(rule) ? rule : [rule])
  })

  // Render the markdown.
  return markyMarkdown(str, options)
}
