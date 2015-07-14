(function() {
  'use strict';

  /**
   *
   * @param {Keypane.Layout}
   * @constructor
   */
  Keypane.Keyboard = function (layout) {
    this.layout = layout;
  };

  /**
   *
   * @type {Keypane.Layout}
   * @default null
   * @protected
   */
  Keypane.Keyboard.prototype.layout = null;

  /**
   * Sets layout.
   * @param {Keypane.Layout} layout
   */
  Keypane.Keyboard.prototype.setLayout = function (layout) {
    this.layout = layout;
  };

  /**
   *
   * @returns {Keypane.Layout}
   */
  Keypane.Keyboard.prototype.getLayout = function () {
    return this.layout;
  };

}());
