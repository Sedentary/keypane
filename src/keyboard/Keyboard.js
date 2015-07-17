(function() {
  'use strict';

  /**
   *
   * @param {HTMLCanvasElement}
   * @param {...*} var_canvasArgs Arguments to the inherited fabric.Canvas
   * @constructor
   * @extends {fabric.Canvas}
   */
  Keypane.Keyboard = function (canvas) {
    if (!(canvas && (canvas instanceof HTMLCanvasElement))) {
      throw new Error('Element must be a HTMLCanvasElement');
    }
    var canvasArgs = Array.prototype.slice.call(arguments, 1);
    Keypane.Keyboard.base(this, 'constructor', canvas, canvasArgs);
  };

  Keypane.inherits(Keypane.Keyboard, fabric.Canvas);

  /**
   *
   * @type {Keypane.Layout}
   * @default null
   * @protected
   */
  Keypane.Keyboard.prototype.layout = null;

  /**
   *
   * @type {boolean}
   * @default false
   * @protected
   */
  Keypane.Keyboard.prototype.shift = false;

  /**
   *
   * @type {boolean}
   * @default false
   * @protected
   */
  Keypane.Keyboard.prototype.ctrl = false;

  /**
   *
   * @type {boolean}
   * @default false
   * @protected
   */
  Keypane.Keyboard.prototype.alt = false;

  /**
   *
   * @type {boolean}
   * @default false
   * @protected
   */
  Keypane.Keyboard.prototype.altGr = false;

  /**
   *
   * @type {Keypane.Key}
   * @default null
   * @protected
   */
  Keypane.Keyboard.prototype.currentKey = null;

  /**
   * Sets layout.
   * @param {Keypane.Layout} layout
   */
  Keypane.Keyboard.prototype.setLayout = function (layout) {
    this.layout = layout;
  };

  /**
   * Gets layout.
   * @returns {Keypane.Layout}
   */
  Keypane.Keyboard.prototype.getLayout = function () {
    return this.layout;
  };

  /**
   * Sets if shift key is pressed.
   * @param {boolean} isPressed
   */
  Keypane.Keyboard.prototype.setShift = function (isPressed) {
    this.shift = isPressed;
  };

  /**
   * Returns true if shift key is pressed.
   * @returns {boolean}
   */
  Keypane.Keyboard.prototype.isShiftPressed = function () {
    return this.shift;
  };

  /**
   * Sets if ctrl key is pressed.
   * @param {boolean} isPressed
   */
  Keypane.Keyboard.prototype.setCtrl = function (isPressed) {
    this.ctrl = isPressed;
  };

  /**
   * Returns true if ctrl key is pressed.
   * @returns {boolean}
   */
  Keypane.Keyboard.prototype.isCtrlPressed = function () {
    return this.ctrl;
  };

  /**
   * Sets if alt key is pressed.
   * @param {boolean} isPressed
   */
  Keypane.Keyboard.prototype.setAlt = function (isPressed) {
    this.alt = isPressed;
  };

  /**
   * Returns true if alt key is pressed.
   * @returns {boolean}
   */
  Keypane.Keyboard.prototype.isAltPressed = function () {
    return this.alt;
  };

  /**
   * Sets if altGr key is pressed.
   * @param {boolean} isPressed
   */
  Keypane.Keyboard.prototype.setAltGr = function (isPressed) {
    this.altGr = isPressed;
  };

  /**
   * Returns true if altGr key is pressed.
   * @returns {boolean}
   */
  Keypane.Keyboard.prototype.isAltGrPressed = function () {
    return this.altGr;
  };

  /**
   * Sets the current key.
   * @param {Keypane.Key} currentKey
   */
  Keypane.Keyboard.prototype.setCurrentKey = function (currentKey) {
    this.currentKey = currentKey;
  };

  /**
   * Gets the current key.
   * @returns {Keypane.Key}
   */
  Keypane.Keyboard.prototype.getCurrentKey = function () {
    return this.currentKey;
  };

}());
