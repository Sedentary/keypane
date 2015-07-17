(function () {
  'use strict';

  /**
   * The key's char. Each key could have 3 chars.
   * @param {string} char
   * @param {?number} fontSize If null, 18 by default.
   * @param {?function} behavior
   * @param {...*} var_textArgs Arguments to the inherited fabric.Text
   * @constructor
   * @extends {fabric.Text}
   */
  Keypane.Char = function (char, fontSize, behavior) {
    if (!char) {
      throw new Error('Char is not defined');
    }
    if (behavior && typeof behavior !== 'function') {
      throw new Error('Behavior is not a function');
    }
    var textArgs = Array.prototype.slice.call(arguments, 3);
    Keypane.Char.base(this, 'constructor', textArgs);

    this.char = char;
    this.fontSize = fontSize || this.fontSize;
    this.behavior = behavior;
  };

  Keypane.inherits(Keypane.Char, fabric.Text);

  /**
   * Char represents what should be shown in the key's text, also
   * key's default behavior is to perform this char's representing keyboard key.
   * @type {string}
   * @default null
   * @protected
   */
  Keypane.Char.prototype.char = null;

  /**
   * Font display size.
   * @type {number}
   * @default 18
   * @protected
   */
  Keypane.Char.prototype.fontSize = 18;

  /**
   * Overwrites the default key's behavior to this char.
   * @type {function}
   * @default null
   * @protected
   */
  Keypane.Char.prototype.behavior = null;

  /**
   * Sets char.
   * @param {number} char
   */
  Keypane.Char.prototype.setChar = function (char) {
    this.char = char;
  };

  /**
   * Gets char.
   * @returns {number}
   */
  Keypane.Char.prototype.getChar = function () {
    return this.char;
  };

  /**
   * Sets font size.
   * @param {number} fontSize
   */
  Keypane.Char.prototype.setFontSize = function (fontSize) {
    this.fontSize = fontSize;
  };

  /**
   * Gets font size.
   * @returns {number}
   */
  Keypane.Char.prototype.getFontSize = function () {
    return this.fontSize;
  };

  /**
   * Sets behavior.
   * @param {function} behavior
   */
  Keypane.Char.prototype.setBehavior = function (behavior) {
    this.behavior = behavior;
  };

  /**
   * Gets behavior.
   * @returns {function}
   */
  Keypane.Char.prototype.getBehavior = function () {
    return this.behavior;
  };

}());

