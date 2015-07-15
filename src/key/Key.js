(function () {
  'use strict';

  /**
   * Keyboard key.
   * @param {Keypane.KeyChar} leftTop
   * @param {Keypane.KeyChar} leftBottom
   * @param {Keypane.KeyChar} rightBottom
   * @param {number} width
   * @param {number} height
   * @param {number} position
   * @param {number} line
   * @constructor
   * @extends {fabric.Group}
   */
  Keypane.Key = function (leftTop, leftBottom, rightBottom, width, height) {
    Keypane.Key.base(this, 'constructor');

    this.leftTop = leftTop ? (leftTop instanceof Keypane.KeyChar) ? leftTop : new Keypane.KeyChar(leftTop) : null;
    this.leftBottom = leftBottom ? (leftBottom instanceof Keypane.KeyChar) ? leftBottom : new Keypane.KeyChar(leftBottom) : null;
    this.rightBottom = rightBottom ? (rightBottom instanceof Keypane.KeyChar) ? rightBottom : new Keypane.KeyChar(rightBottom) : null;
    this.width = width || 40;
    this.height = height || 40;

    _initGroup(this);
  };

  Keypane.inherits(Keypane.Key, fabric.Group);

  /**
   *
   * @private
   */
  var _initGroup = function (key) {
    // fabric.Group
    key.lockScalingX = true;
    key.lockScalingY = true;
    key.hasControls = false;
    key.hoverCursor = 'pointer';

    key.add(new fabric.Rect({ // Creates key rect
        rx: 5,
        width: key.width,
        height: key.height,
        fill: key.keyColor,
        shadow: new fabric.Shadow({
          offsetX: 2,
          offsetY: 2,
          blur: 3
        })
      })
    );

    if (key.leftTop) {
      key.add(new fabric.Text(key.leftTop.char, { // Creates left top char
          fill: key.textColor,
          fontSize: key.leftTop.fontSize,
          top: 0,
          left: 5
        })
      );
    }
    if (key.leftBottom) {
      key.add(new fabric.Text(key.leftBottom.char, { // Creates left top char
          fill: key.textColor,
          fontSize: key.leftBottom.fontSize,
          top: 18,
          left: 5
        })
      );
    }
    if (key.rightBottom) {
      key.add(new fabric.Text(key.rightBottom.char, { // Creates right bottom char
          fill: key.textColor,
          fontSize: key.rightBottom.fontSize,
          top: 20,
          left: 25
        })
      );
    }
  };

  /**
   *
   * @type {Keypane.KeyChar}
   * @default null
   * @protected
   */
  Keypane.Key.prototype.leftTop = null;

  /**
   *
   * @type {Keypane.KeyChar}
   * @default null
   * @protected
   */
  Keypane.Key.prototype.leftBottom = null;

  /**
   *
   * @type {Keypane.KeyChar}
   * @default null
   * @protected
   */
  Keypane.Key.prototype.rightBottom = null;

  /**
   *
   * @type {number}
   * @default 40
   * @protected
   */
  Keypane.Key.prototype.width = null;

  /**
   *
   * @type {number}
   * @default 40
   * @protected
   */
  Keypane.Key.prototype.height = null;

  /**
   *
   * @param {Keypane.KeyChar} leftTop
   */
  Keypane.Key.prototype.setLeftTop = function (leftTop) {
    this.leftTop = leftTop;
  };

  /**
   *
   * @returns {null|Keypane.KeyChar}
   */
  Keypane.Key.prototype.getLeftTop = function () {
    return this.leftTop;
  };

  /**
   *
   * @param {Keypane.KeyChar} leftBottom
   */
  Keypane.Key.prototype.setLeftBottom = function (leftBottom) {
    this.leftBottom = leftBottom;
  };

  /**
   *
   * @returns {null|Keypane.KeyChar}
   */
  Keypane.Key.prototype.getLeftBottom = function () {
    return this.leftBottom;
  };

  /**
   *
   * @param {Keypane.KeyChar} rightBottom
   */
  Keypane.Key.prototype.setRightBottom = function (rightBottom) {
    this.rightBottom = rightBottom;
  };

  /**
   *
   * @returns {null|Keypane.KeyChar}
   */
  Keypane.Key.prototype.getRightBottom = function () {
    return this.rightBottom;
  };

  /**
   *
   * @param {number} width
   */
  Keypane.Key.prototype.setWidth = function (width) {
    this.width = width;
  };

  /**
   *
   * @returns {number}
   */
  Keypane.Key.prototype.getWidth = function () {
    return this.width;
  };

  /**
   *
   * @param {number} height
   */
  Keypane.Key.prototype.setHeight = function (height) {
    this.height = height;
  };

  /**
   *
   * @returns {number}
   */
  Keypane.Key.prototype.getHeight = function () {
    return this.height;
  };

}());
