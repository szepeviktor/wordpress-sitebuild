var jsdom = require("jsdom");

jsdom.env(
  "http://maxbrenner.com/",
  [],
  function (errors, window) {
/////////////////////////////////////////////////////////////////

var MXB = {};

/**
 * Namespace function, safely creates a namespace without clobbering existing objects
 * @param {String} namespace A string in the form of 'IBM.SE.package.subpackage'
 * @returns {Object}
 */
MXB.namespace = function ( namespaceString ) {
  var parts = namespaceString.split( '.' ),
    parent = window,
    currentPart = '';

  for ( var i = 0, length = parts.length; i < length; i++ ) {
    currentPart = parts[i];
    parent[currentPart] = parent[currentPart] || {};
    parent = parent[currentPart];

  }

  return parent;
}

MXB.namespace('MXB.SE.package.subpackage');
console.dir(window.MXB);
console.dir(MXB);

/////////////////////////////////////////////////////////////////
  }
);
