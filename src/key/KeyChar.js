(function () {
  'use strict';

  /**
   * The key's char. Each key could have 3 chars.
   * @param {string} char
   * @param {number} fontSize If null, 18 by default.
   * @param {function} behavior
   * @constructor
   */
  Keypane.KeyChar = function (char, fontSize, behavior) {
    this.char = char;
    this.fontSize = fontSize || 18;
    this.behavior = behavior;
  };

  /**
   * Char represents what should be shown in the key's text, also
   * key's default behavior is to perform this char's representing keyboard key.
   * @type {string}
   * @default null
   * @protected
   */
  Keypane.KeyChar.prototype.char = null;

  /**
   * Font display size.
   * @type {number}
   * @default null
   * @protected
   */
  Keypane.KeyChar.prototype.fontSize = null;

  /**
   * Overwrites the default key's behavior to this char.
   * @type {function}
   * @default null
   * @protected
   */
  Keypane.KeyChar.prototype.behavior = null;

  /**
   * Sets char.
   * @param {number} char
   */
  Keypane.KeyChar.prototype.setChar = function (char) {
    this.char = char;
  };

  /**
   * Gets char.
   * @returns {number}
   */
  Keypane.KeyChar.prototype.getChar = function () {
    return this.char;
  };

  /**
   * Sets font size.
   * @param {number} fontSize
   */
  Keypane.KeyChar.prototype.setFontSize = function (fontSize) {
    this.fontSize = fontSize;
  };

  /**
   * Gets font size.
   * @returns {number}
   */
  Keypane.KeyChar.prototype.getFontSize = function () {
    return this.fontSize;
  };

  /**
   * Sets behavior.
   * @param {function} behavior
   */
  Keypane.KeyChar.prototype.setBehavior = function (behavior) {
    this.behavior = behavior;
  };

  /**
   * Gets behavior.
   * @returns {function}
   */
  Keypane.KeyChar.prototype.getBehavior = function () {
    return this.behavior;
  };

}());

