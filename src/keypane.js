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
  Keypane.shift = false;
  Keypane.ctrl = false;
  Keypane.alt = false;
  Keypane.altGr = false;

  /**
   *
   * @param {string} char
   * @param {function} fn
   * @constructor
   */
  Keypane.KeyChar = function (char, fontSize, fn) {
    this.char = char;
    this.fontSize = fontSize || 20;
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
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      var theKey = new Keypane.Key(null, null, null, null, null);

      if (typeof key === 'string') {

        theKey.leftTop = new Keypane.KeyChar(key, null);

      } else if (key instanceof Keypane.Key) {

        theKey = key;

      } else if (key instanceof Array) {

        for (var k = 0; k < key.length; k++) {
          var index = k;
          key = key[k];

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
        }
      }

      line.push(theKey);
    }

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
    for (var i = 0; i < Keypane.keys.length; i++) {
      var line = Keypane.keys[i];
      for (var k = 0; k < line.length; k++) {
        var key = line[k];
        Keypane.createKey(i, k, key);
      }
    }
  };

  /**
   *
   * @param {number} line
   * @param {number} position
   * @param {object} key
   */
  Keypane.createKey = function (line, position, key) {
    var group = new fabric.Group([], {
      left: (key.width + 3) * position,
      top: (key.height + 3) * line,
      lockScalingX: true,
      lockScalingY: true,
      hasControls: false,
      hoverCursor: 'pointer'
    });

    group.add(new fabric.Rect({ // Creates key rect
        rx: 5,
        width: key.width || 40,
        height: key.height || 40,
        fill: '#000000',
        shadow: new fabric.Shadow({offsetX: 2, offsetY: 2, blur: 3})
      })
    );

    if (key.leftTop) {
      group.add(new fabric.IText(key.leftTop.char, { // Creates left top char
          backgroundColor: '#000000', fill: '#FFFFFF', fontSize: key.leftTop.fontSize, top: 5, left: 10
        })
      );
    }

    if (key.leftBottom) {
      group.add(new fabric.IText(key.leftBottom.char, { // Creates left top char
          backgroundColor: '#000000', fill: '#FFFFFF', fontSize: key.leftBottom.fontSize, top: 5, left: 10
        })
      );
    }

    if (key.rightBottom) {
      group.add(new fabric.IText(key.rightBottom.char, { // Creates right bottom char
          backgroundColor: '#000000', fill: '#FFFFFF', fontSize: key.rightBottom.fontSize, top: 5, left: 10
        })
      );
    }

    Keypane.registerKeyEvents(group, key);

    Keypane.canvas.add(group);
  };

  /**
   *
   * @param {Fabric.Group} group
   * @param {Keypane.Key} key
   */
  Keypane.registerKeyEvents = function (group, key) {
    group.on('mouseover', function () {
      this.item(0).set({fill: '#3A3A3A'});
      if (key.leftTop) {
        this.item(1).set({backgroundColor: '#3A3A3A'});
      }
      if (key.leftBottom) {
        this.item(2).set({backgroundColor: '#3A3A3A'});
      }
      if (key.rightBottom) {
        this.item(3).set({backgroundColor: '#3A3A3A'});
      }
      Keypane.canvas.renderAll();
    })
    .on('mouseout', function () {
      this.item(0).set({fill: '#000000'});
      if (key.leftTop) {
        this.item(1).set({backgroundColor: '#000000'});
      }
      if (key.leftBottom) {
        this.item(2).set({backgroundColor: '#000000'});
      }
      if (key.rightBottom) {
        this.item(3).set({backgroundColor: '#000000'});
      }
      Keypane.canvas.renderAll();
    })
    .on('mousedown', function () {
      this.item(0).set({fill: '#000000'});
      if (key.leftTop) {
        this.item(1).set({backgroundColor: '#000000'});
      }
      if (key.leftBottom) {
        this.item(2).set({backgroundColor: '#000000'});
      }
      if (key.rightBottom) {
        this.item(3).set({backgroundColor: '#000000'});
      }
      Keypane.canvas.renderAll();
    })
    .on('mouseup', function () {
      this.item(0).set({fill: '#3A3A3A'});
      if (key.leftTop) {
        this.item(1).set({backgroundColor: '#3A3A3A'});
      }
      if (key.leftBottom) {
        this.item(2).set({backgroundColor: '#3A3A3A'});
      }
      if (key.rightBottom) {
        this.item(3).set({backgroundColor: '#3A3A3A'});
      }
      Keypane.canvas.renderAll();
    });
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
