/*!
 * Keypane
 *
 * MIT licensed
 * Copyright (C) 2015 Rodrigo Gomes da Silva
 */
(function (window, fabric) {
  'use strict';

  window.Keypane = window.Keypane || {};

  var _canvas = null;
  var _keys = [];

  /**
   *
   */
  Keypane.init = function () {
    _canvas = new fabric.Canvas('keypane-canvas');

    _keys = [
      [ // Line 1
        {key: "'"},
        {key: '1'},
        {key: '2'},
        {key: '3'},
        {key: '4'},
        {key: '5'},
        {key: '6'},
        {key: '7'},
        {key: '8'},
        {key: '9'},
        {key: '0'},
        {key: '-'},
        {key: '='}
      ],
      [ // Line 2
        {key: 'Q'},
        {key: 'W'},
        {key: 'R'},
        {key: 'T'},
        {key: 'Y'},
        {key: 'U'},
        {key: 'I'},
        {key: 'O'},
        {key: 'P'},
        {key: '´'},
        {key: '['}
      ],
      [ // Line 3
        {key: 'A'},
        {key: 'S'},
        {key: 'D'},
        {key: 'F'},
        {key: 'G'},
        {key: 'H'},
        {key: 'J'},
        {key: 'D'},
        {key: 'K'},
        {key: 'L'},
        {key: 'Ç'},
        {key: '~'},
        {key: ']'}
      ],
      [ // Line 4
        {key: '\\'},
        {key: 'Z'},
        {key: 'X'},
        {key: 'C'},
        {key: 'V'},
        {key: 'B'},
        {key: 'N'},
        {key: 'M'},
        {key: ','},
        {key: '.'},
        {key: ';'},
        {key: '/'}
      ]
    ];

    Keypane.updateCanvasSize();

    for (var line = 0; line < _keys.length; line++) { // Lines

      var position = 0;
      for (var key in _keys[line]) { // Keys
        Keypane.createKey(line, position, _keys[line][key]);
        position++;
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
      _canvas.renderAll();
    });

    group.on('mouseout', function () {
      this.item(0).set({fill: '#000000'});
      this.item(1).set({backgroundColor: '#000000'});
      _canvas.renderAll();
    });

    _canvas.add(group);
  };

  /**
   * Updates canvas size based on the keyboard's layout
   */
  Keypane.updateCanvasSize = function () {
    _canvas.setWidth(43.2 * Keypane.findBiggestKeyLine().length);
    _canvas.setHeight(43.2 * _keys.length);
  };

  /**
   *
   * @returns {*}
   */
  Keypane.findBiggestKeyLine = function () {
    var line = null;
    var currentSize = 0;
    for (var l in _keys) {
      if (_keys[l].length > currentSize) {
        currentSize = _keys[l].length;
        line = _keys[l];
      }
    }
    return line;
  };

}(window, fabric));
