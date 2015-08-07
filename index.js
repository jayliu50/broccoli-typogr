'use strict';
var Filter = require('broccoli-filter');
var typogr = require('typogr');

function TypogrFilter(inputTree, options) {
  if (!(this instanceof TypogrFilter)) {
    return new TypogrFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

TypogrFilter.prototype = Object.create(Filter.prototype);
TypogrFilter.prototype.constructor = TypogrFilter;

TypogrFilter.prototype.extensions = ['html'];
TypogrFilter.prototype.targetExtension = 'html';

TypogrFilter.prototype.processString = function (str, filename) {
  this.options.filename = filename;

  return typogr(str).typogrify();
};

module.exports = TypogrFilter;
