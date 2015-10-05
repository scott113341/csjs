'use strict';

module.exports = {
  makeComposition: makeComposition,
  isComposition: isComposition
};

/**
 * Returns an immutable composition object containing the given class names
 * @param  {array} classNames - The input array of class names
 * @return {Composition}      - An immutable object that holds multiple
 *                              representations of the class composition
 */
function makeComposition(classNames) {
  return Object.create(Composition.prototype, {
    classNames: { // the original array of class names
      value: Object.freeze(classNames),
      configurable: false,
      writable: false,
      enumerable: true
    },
    className: { // space-seperated class string for use in HTML
      value: classNames.join(' '),
      configurable: false,
      writable: false,
      enumerable: true
    },
    selector: { // comma-seperated, period-prefixed string for use in CSS
      value: classNames.map(name => '.' + name).join(', '),
      configurable: false,
      writable: false,
      enumerable: true
    }
  });
}

/**
 * Returns whether the input value is a Composition
 * @param value       - value to check
 * @return {boolean}  - whether value is a Composition or not
 */
function isComposition(value) {
  return value instanceof Composition;
}

/**
 * Private constructor for use in `instanceof` checks
 */
function Composition() {}