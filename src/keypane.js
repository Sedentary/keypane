/*!
 * Keypane
 *
 * MIT licensed
 * Copyright (C) 2015 Rodrigo Gomes da Silva
 */
(function (window, fabric) {
  'use strict';

  window.Keypane = window.Keypane || {};

  Keypane.canvas = null;
  Keypane.keys = [];

  /**
   *
   * @param {string} char
   * @param {function} fn
   * @constructor
   */
  Keypane.KeyChar = function (char, fn) {
    this.char = char;
    this.fn = fn;
  };

  /**
   *
   * @param {Keypane.KeyChar} leftTop
   * @param {Keypane.KeyChar} leftBottom
   * @param {Keypane.KeyChar} rightBottom
   * @param {number} width
   * @param {number} height
   * @constructor
   */
  Keypane.Key = function (leftTop, leftBottom, rightBottom, width, height) {
    this.leftTop = leftTop;
    this.leftBottom = leftBottom;
    this.rightBottom = rightBottom;
    this.width = width || 40;
    this.height = height || 40;
  };

  /**
   *
   * @param {*[]} keys
   */
  Keypane.addLine = function (keys) {
    var line = [];
    keys.forEach(function (key) {
      var theKey = new Keypane.Key(null, null, null, null, null);

      if (key instanceof String) {
        console.log('string');

        theKey.leftTop = new Keypane.KeyChar(key, null);

      } else if (key instanceof Keypane.Key) {
        console.log('Keypane.Key');

        theKey = key;

      } else if (key instanceof Array) {
        console.log('Array');

        key.forEach(function (k, index) {

          if (k instanceof String) {
            console.log(k);
            k = new Keypane.KeyChar(k, null);
          }

          switch (index) {
            case 0:
              theKey.leftTop = k;
              break;
            case 1:
              theKey.leftBottom = k;
              break;
            case 2:
              theKey.rightBottom = k;
          }
        });
      }

      line.push(theKey);
    });

    Keypane.keys.push(line);
  };

  /**
   *
   */
  Keypane.init = function () {
    Keypane.canvas = new fabric.Canvas('keypane-canvas');

    Keypane.addLine([ // Line 1
      "'", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='
    ]);

    Keypane.addLine([ // Line 2
      'Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '´', '['
    ]);

    Keypane.addLine([ // Line 3
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'D', 'K', 'L', 'Ç', '~', ']'
    ]);

    Keypane.addLine([ // Line 4
      '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';', '/'
    ]);

    Keypane.updateCanvasSize();

    Keypane.createKeys();
  };

  /**
   *
   */
  Keypane.createKeys = function () {
    Keypane.keys.forEach(function (line, index) { // Lines
      line.forEach(function (key, position) { // Keys
        Keypane.createKey(index, position, key.leftTop.char);
      });
    });
  };

  /**
   *
   * @param {number} line
   * @param {number} position
   * @param {object} key
   */
  Keypane.createKey = function (line, position, key) {
    var rect = new fabric.Rect({
      rx: 5,
      width: 40,
      height: 40,
      fill: '#000000',
      shadow: new fabric.Shadow({
        offsetX: 2,
        offsetY: 2,
        blur: 3
      })
    });

    var text = new fabric.IText(key.key, {
      backgroundColor: '#000000',
      fill: '#FFFFFF',
      fontSize: 20,
      top: 5,
      left: 10
    });

    var group = new fabric.Group([rect, text], {
      left: 43 * position,
      top: 43 * line,
      lockScalingX: true,
      lockScalingY: true,
      hasControls: false,
      hoverCursor: 'pointer'
    });

    group.on('mouseover', function () {
      this.item(0).set({fill: '#3A3A3A'});
      this.item(1).set({backgroundColor: '#3A3A3A'});
      Keypane.canvas.renderAll();
    });

    group.on('mouseout', function () {
      this.item(0).set({fill: '#000000'});
      this.item(1).set({backgroundColor: '#000000'});
      Keypane.canvas.renderAll();
    });

    Keypane.canvas.add(group);
  };

  /**
   * Updates canvas size based on the keyboard's layout
   */
  Keypane.updateCanvasSize = function () {
    Keypane.canvas.setWidth(43.2 * Keypane.findBiggestKeyLine().length);
    Keypane.canvas.setHeight(43.2 * Keypane.keys.length);
  };

  /**
   *
   * @returns {*}
   */
  Keypane.findBiggestKeyLine = function () {
    var line = null;
    var currentSize = 0;
    for (var l in Keypane.keys) {
      if (Keypane.keys[l].length > currentSize) {
        currentSize = Keypane.keys[l].length;
        line = Keypane.keys[l];
      }
    }
    return line;
  };

}(window, fabric));
