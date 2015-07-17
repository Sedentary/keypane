(function() {
  'use strict';

  /**
   * Keyboard row of keys.
   * @param {Keyboard.Key[]}
   * @constructor
   */
  Keypane.Row = function (keys) {
    this.keys = keys || [];
  };

  /**
   * Keyboard.Key array representing a keyboard row of keys.
   * @type {Keyboard.Key[]}
   * @default []
   * @protected
   */
  Keypane.Row.prototype.keys = [];

  /**
   * Sets rows keys.
   * @param {Keyboard.Key[]} keys
   */
  Keypane.Row.prototype.setKeys = function (keys) {
    this.keys = keys;
  };

  /**
   * Returns the row's keys.
   * @returns {Keyboard.Key[]}
   */
  Keypane.Row.prototype.getKeys = function () {
    return this.keys;
  };

  /**
   * Add a key to the row.
   * @param {Keyboard.Key} key
   */
  Keypane.Row.prototype.addKey = function (key) {
    this.keys.push(key);
  };

  /**
   * Add keys to the row.
   * @param {Keyboard.Key[]} keys
   */
  Keypane.Row.prototype.addKeys = function (keys) {
    this.keys.concat(keys);
  };

  /**
   * Removes a key from the row.
   * @param {number} index Key index in the row. Starts at 0.
   */
  Keypane.Row.prototype.removeKey = function (index) {
    this.keys.splice(index, 1);
  };

}());
