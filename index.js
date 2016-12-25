'use strict'

var markyMarkdown = require('marky-markdown')

exports.name = 'marky-markdown'
exports.outputFormat = 'html'
exports.inputFormats = ['marky-markdown', 'markdown', 'md']
exports.render = function (str, options) {
  options = options || {}

  // Render the markdown.
  return markyMarkdown(str, options)
}
