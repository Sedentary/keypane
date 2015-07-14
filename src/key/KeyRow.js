(function() {
  'use strict';

  /**
   * Keyboard row of keys.
   * @param {Keyboard.Key[]}
   * @constructor
   */
  Keypane.KeyRow = function (keys) {
    this.keys = keys || [];
  };

  /**
   * Keyboard.Key array representing a keyboard row of keys.
   * @type {Keyboard.Key[]}
   * @default []
   * @protected
   */
  Keypane.KeyRow.prototype.keys = [];

  /**
   * Sets rows keys.
   * @param {Keyboard.Key[]} keys
   */
  Keypane.KeyRow.prototype.setKeys = function (keys) {
    this.keys = keys;
  };

  /**
   * Returns the row's keys.
   * @returns {Keyboard.Key[]}
   */
  Keypane.KeyRow.prototype.getKeys = function () {
    return this.keys;
  };

  /**
   * Add a key to the row.
   * @param {Keyboard.Key} key
   */
  Keypane.KeyRow.prototype.addKey = function (key) {
    this.keys.push(key);
  };

  /**
   * Add keys to the row.
   * @param {Keyboard.Key[]} keys
   */
  Keypane.KeyRow.prototype.addKeys = function (keys) {
    this.keys.concat(keys);
  };

  /**
   * Removes a key from the row.
   * @param {number} index Key index in the row. Starts at 0.
   */
  Keypane.KeyRow.prototype.removeKey = function (index) {
    this.keys.splice(index, 1);
  };

}());
