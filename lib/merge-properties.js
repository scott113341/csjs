'use strict';

/**
 * Shallowly merges each argument's own properties into a new object
 * Does not modify source objects
 * @param {...object} - the objects to be merged
 * @returns {object}  - the new object
 */
module.exports = function() {
  var target = {};

  for (var index = 0; index < arguments.length; index++) {
    var source = arguments[index];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
