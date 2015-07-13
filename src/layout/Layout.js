(function () {
  'use strict';

  /**
   *
   * @constructor
   */
  Keypane.Layout = function () {};

  Keypane.Layout.prototype.keys = [];

  Keypane.Layout.prototype.addLine = function (line) {
    this.keys.concat(line);
  };

  Keypane.Keyboard.prototype.removeLine = function (index) {
    this.keys.splice(index, 1);
  };

}());
