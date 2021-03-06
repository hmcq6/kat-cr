/**
 * URI merge module
 * @module merge
 */

"use strict";

const uri = require('uri-js'),
  uriRe = /(.*)\/$/;

/**
 * Merges http URI segments together
 * @param {...string} arguments - Each URI segment
 * @returns {string} Complete URI
 */

module.exports = function merge() {
  return [].map.call(arguments, function (v) {
    let parts = uriRe.exec(v);
    if (parts) return parts[1];
    return v;
  }).join('/');
}
