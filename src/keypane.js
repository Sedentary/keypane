/**
 * @requires /vendor/fabric.min.js
 */

(function (window, fabric) {
  'use strict';

  window.Keypane = window.Keypane || {};

  // Keypane props
  Keypane.canvas = null;
  Keypane.keys = [];
  Keypane.shift = false;
  Keypane.ctrl = false;
  Keypane.alt = false;
  Keypane.altGr = false;
  Keypane.currentKey = null;

  /**
   *
   * @param {string} char
   * @param {function} fn
   * @constructor
   */
  Keypane.KeyChar = function (char, fontSize, fn) {
    this.char = char;
    this.fontSize = fontSize || 18;
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
      new Keypane.Key(
        new Keypane.KeyChar('"'), new Keypane.KeyChar("'")
      ),
      new Keypane.Key(
        new Keypane.KeyChar('!'), new Keypane.KeyChar('1'), new Keypane.KeyChar('¹')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('@'), new Keypane.KeyChar('2'), new Keypane.KeyChar('²')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('#'), new Keypane.KeyChar('3'), new Keypane.KeyChar('³')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('$'), new Keypane.KeyChar('4'), new Keypane.KeyChar('£')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('%'), new Keypane.KeyChar('5'), new Keypane.KeyChar('¢')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('¨'), new Keypane.KeyChar('6'), new Keypane.KeyChar('¬')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('&'), new Keypane.KeyChar('7')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('*'), new Keypane.KeyChar('8')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('('), new Keypane.KeyChar('9')
      ),
      new Keypane.Key(
        new Keypane.KeyChar(')'), new Keypane.KeyChar('0')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('_'), new Keypane.KeyChar('-')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('+'), new Keypane.KeyChar('='), new Keypane.KeyChar('§')
      )
    ]);

    Keypane.addLine([ // Line 2
      new Keypane.Key(
        new Keypane.KeyChar('Tab', null, function () {
          console.log('Tab pressed');
        }), null, null, 60
      ),
      'Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
      new Keypane.Key(
        new Keypane.KeyChar('`'), new Keypane.KeyChar('´')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('{'), new Keypane.KeyChar('['), new Keypane.KeyChar('ª')
      )
    ]);

    Keypane.addLine([ // Line 3
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'D', 'K', 'L', 'Ç',
      new Keypane.Key(
        new Keypane.KeyChar('^'), new Keypane.KeyChar('~')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('}'), new Keypane.KeyChar(']'), new Keypane.KeyChar('º')
      )
    ]);

    Keypane.addLine([ // Line 4
      '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
      new Keypane.Key(
        new Keypane.KeyChar('<'), new Keypane.KeyChar(',')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('>'), new Keypane.KeyChar('.')
      ),
      new Keypane.Key(
        new Keypane.KeyChar(':'), new Keypane.KeyChar(';')
      ),
      new Keypane.Key(
        new Keypane.KeyChar('?'), new Keypane.KeyChar('/'), new Keypane.KeyChar('°')
      )
    ]);

    Keypane.updateCanvasSize();

    _createKeys();

    _registerCanvasElementEvents();
  };

  var _registerCanvasElementEvents = function () {
    var canvas = document.getElementById('keypane-canvas');
    canvas.addEventListener('mouseout', function () {

      Keypane.canvas.renderAll();
    });
  };

  /**
   *
   * @private
   */
  var _createKeys = function () {
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
    var groupElements = [];

    groupElements.push(new fabric.Rect({ // Creates key rect
        rx: 5,
        width: key.width,
        height: key.height,
        fill: '#000000',
        shadow: new fabric.Shadow({
          offsetX: 2,
          offsetY: 2,
          blur: 3
        })
      })
    );

    if (key.leftTop) {
      groupElements.push(new fabric.Text(key.leftTop.char, { // Creates left top char
          fill: '#FFFFFF',
          fontSize: key.leftTop.fontSize,
          top: 0,
          left: 5
        })
      );
    }
    if (key.leftBottom) {
      groupElements.push(new fabric.Text(key.leftBottom.char, { // Creates left top char
          fill: '#FFFFFF',
          fontSize: key.leftBottom.fontSize,
          top: 18,
          left: 5
        })
      );
    }
    if (key.rightBottom) {
      groupElements.push(new fabric.Text(key.rightBottom.char, { // Creates right bottom char
          fill: '#FFFFFF',
          fontSize: key.rightBottom.fontSize,
          top: 20,
          left: 25
        })
      );
    }

    var group = new fabric.Group(groupElements, {
      left: (key.width + 3) * position,
      top: (key.height + 3) * line,
      lockScalingX: true,
      lockScalingY: true,
      hasControls: false,
      hoverCursor: 'pointer'
    });

    _registerKeyEvents(group, key);

    Keypane.canvas.add(group);

    _registerElementEvents();
  };

  /**
   *
   * @private
   */
  var _registerElementEvents = function () {
    var cnvs = document.getElementById('keypane-canvas');
    cnvs.addEventListener('mouseleave', function () {
      if (Keypane.currentKey) {
        Keypane.currentKey.item(0).set({
          fill: '#000000'
        });
        Keypane.canvas.renderAll();
      }
    });
  };

  /**
   *
   * @param {Fabric.Group} group
   * @param {Keypane.Key} key
   * @private
   */
  var _registerKeyEvents = function (group, key) {
    group.on('mouseover', function () {
      Keypane.currentKey = this;
      this.item(0).set({
        fill: '#3A3A3A'
      });
      Keypane.canvas.renderAll();
    })
      .on('mouseout', function () {
        Keypane.currentKey = null;
        this.item(0).set({
          fill: '#000000'
        });
        Keypane.canvas.renderAll();
      })
      .on('mousedown', function () {
        this.item(0).set({
          fill: '#000000'
        });
        if (key.leftTop) {
        }
        if (key.leftBottom) {
        }
        if (key.rightBottom) {
        }
        Keypane.canvas.renderAll();
      })
      .on('mouseup', function () {
        this.item(0).set({
          fill: '#3A3A3A'
        });
        if (key.leftTop) {
        }
        if (key.leftBottom) {
        }
        if (key.rightBottom) {
        }
        Keypane.canvas.renderAll();
      });
  };

  /**
   * Updates canvas size based on the keyboard's layout
   */
  Keypane.updateCanvasSize = function () {
    var biggestKeyLine = Keypane.findBiggestKeyLine();
    Keypane.canvas.setWidth(Keypane.findLineWidth(biggestKeyLine));
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
      var lineSize = Keypane.findLineWidth(Keypane.keys[l]);
      if (currentSize < lineSize) {
        currentSize = lineSize;
        line = Keypane.keys[l];
      }
    }
    return line;
  };

  /**
   *
   * @param {Keypane.Key} line
   * @returns {number}
   */
  Keypane.findLineWidth = function (line) {
    var lineSize = 0;
    for (var k in line) {
      var key = line[k];
      lineSize = lineSize + (key.width + 3.1);
    }

    return lineSize;
  };

}(window, fabric));
