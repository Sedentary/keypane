(function () {
  'use strict';

  /**
   *
   * @param {Keypane.KeyRow[]} rows
   * @param {string} keyColor Key color code. If null, default is #000000.
   * @param {string} textColor Text color code. If null, default is #FFFFFF.
   * @constructor
   */
  Keypane.Layout = function (rows, keyColor, textColor) {
    this.rows = rows || [];
    this.keyColor = keyColor || '#000000';
    this.textColor = textColor || '#FFFFFF';
  };

  /**
   *
   * @type {Keypane.KeyRow[]}
   * @default []
   * @protected
   */
  Keypane.Layout.prototype.rows = [];

  /**
   *
   * @type {string}
   * @default null
   * @protected
   */
  Keypane.Layout.prototype.keyColor = null;

  /**
   *
   * @type {string}
   * @default null
   * @protected
   */
  Keypane.Layout.prototype.textColor = null;

  /**
   * Sets rows.
   * @param {Keypane.KeyRow[]} rows
   */
  Keypane.Layout.prototype.setRows = function (rows) {
    this.rows = rows;
  };

  /**
   * Gets rows.
   * @returns {Keypane.KeyRow[]}
   */
  Keypane.Layout.prototype.getRows = function () {
    return this.rows;
  };

  /**
   * Adds a row.
   * @param {Keypane.KeyRow} row
   */
  Keypane.Layout.prototype.addRow = function (row) {
    this.keys.concat(row);
  };

  /**
   * Removes a row.
   * @param {number} rowIndex The rows index. Starts at 0.
   */
  Keypane.Keyboard.prototype.removeRow = function (rowIndex) {
    this.keys.splice(rowIndex, 1);
  };

  /**
   * Sets key color.
   * @param {string} keyColor A color code.
   */
  Keypane.Layout.prototype.setKeyColor = function (keyColor) {
    this.keyColor = keyColor;
  };

  /**
   * Gets key color.
   * @returns {string}
   */
  Keypane.Layout.prototype.getKeyColor = function () {
    return this.keyColor;
  };

  /**
   * Sets text color.
   * @param {string} textColor
   */
  Keypane.Layout.prototype.setTextColor = function (textColor) {
    this.textColor = textColor;
  };

  /**
   * Gets text color.
   * @returns {string}
   */
  Keypane.Layout.prototype.getKeyColor = function () {
    return this.textColor;
  };

}());
