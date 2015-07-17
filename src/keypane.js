/**
 * @requires /vendor/fabric.min.js
 */

(function (window, undefined) {
  'use strict';

  window.Keypane = window.Keypane || {};

  /**
   *
   * @type {null}
   */
  Keypane.canvas = null;

  /**
   *
   * @type {Keypane.Keyboard}
   */
  Keypane.keyboard = null;

  /**
   *
   */
  Keypane.init = function () {
    Keypane.canvas = new fabric.Canvas('keypane-canvas');
    Keypane.keyboard = new Keypane.Keyboard(new Keypane.Layout.Qwert());

    _createKeys();

    _registerCanvasElementEvents();

    Keypane.updateCanvasSize();

    _registerElementEvents();
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
    for (var i = 0; i < Keypane.keyboard.getLayout().getRows().length; i++) {
      var row = Keypane.keyboard.getLayout().getRows()[i];
      for (var k = 0; k < row.length; k++) {
        var key = row[k];
        Keypane.createKey(i, k, key);
      }
    }
  };

  /**
   *
   * @param {number} row
   * @param {number} position
   * @param {Keypane.Key} key
   */
  Keypane.createKey = function (row, position, key) {

    key.setKeyColor(Keypane.keyboard.getLayout().getKeyColor());
    key.setTextColor(Keypane.keyboard.getLayout().getKeyColor());

    _registerKeyEvents(key);

    Keypane.canvas.add(key);

    Keypane.canvas.renderAll();
  };

  /**
   *
   * @private
   */
  var _registerElementEvents = function () {
    var cnvs = document.getElementById('keypane-canvas');
    cnvs.addEventListener('mouseleave', function () {
      if (Keypane.keyboard.currentKey) {
        Keypane.keyboard.currentKey.item(0).set({
          fill: '#000000'
        });
        Keypane.canvas.renderAll();
      }
    });
  };

  /**
   *
   * @param {Keypane.Key} key
   * @private
   */
  var _registerKeyEvents = function (key) {
    key.on('mouseover', function () {
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
    var biggestKeyLine = Keypane.findBiggestKeyRow();
    Keypane.canvas.setWidth(Keypane.findRowWidth(biggestKeyLine));
    Keypane.canvas.setHeight(43.2 * Keypane.keyboard.getLayout().getRows().length);
  };

  /**
   *
   * @returns {Keypane.Row}
   */
  Keypane.findBiggestKeyRow = function () {
    var row = null;
    var currentSize = 0;
    for (var i = 0; i < Keypane.keyboard.getLayout().getRows().length; i++) {
      var rowSize = Keypane.findRowWidth(Keypane.keyboard.getLayout().getRows()[i]);
      if (currentSize < rowSize) {
        currentSize = rowSize;
        row = Keypane.keyboard.getLayout().getRows()[i];
      }
    }

    console.log(row);

    return row;
  };

  /**
   *
   * @param {Keypane.Row} row
   * @returns {number}
   */
  Keypane.findRowWidth = function (row) {
    var rowSize = 0;
    for (var i = 0; i < row.length; i++) {
      var key = row[i];
      rowSize = rowSize + (key.width + 3.1);
    }

    console.log(rowSize);

    return rowSize;
  };

  /**
   *
   * @param {Array} rows
   * @returns {Keypane.Row[]}
   */
  Keypane.convertKeyRows = function (rows, cb) {
    for (var i = 0; i < rows.length; i++) {
      this.convertKeyRow(rows[i], function (row) {
        cb(row);
      });
    }
  };

  /**
   *
   * @param {*} row
   * @callback cb
   */
  Keypane.convertKeyRow = function (row, cb) {
    if (!(row instanceof Keypane.Row)) {
      for (var i = 0; i < row.length; i++) {
        var index = i;
        this.convertKey(row[i], function (key) {
          row[index] = key;
        });
      }
    }
    cb(row);
  };

  /**
   *
   * @param {*} key
   * @callback cb
   */
  Keypane.convertKey = function (key, cb) {
    if (typeof key === 'string') {
      key = (new Keypane.Key(key));
    }
    cb(key);
  };

  /**
   * Inherits the prototype methods from one constructor into another.
   *
   * Usage:
   * <pre>
   * function ParentClass(a, b) { }
   * ParentClass.prototype.foo = function(a) { }
   *
   * function ChildClass(a, b, c) {
   *   tracking.base(this, a, b);
   * }
   * tracking.inherits(ChildClass, ParentClass);
   *
   * var child = new ChildClass('a', 'b', 'c');
   * child.foo();
   * </pre>
   *
   * @param {Function} childCtor Child class.
   * @param {Function} parentCtor Parent class.
   */
  Keypane.inherits = function (childCtor, parentCtor) {
    function TempCtor() {
    }

    TempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new TempCtor();
    childCtor.prototype.constructor = childCtor;

    /**
     * Calls superclass constructor/method.
     *
     * This function is only available if you use tracking.inherits to express
     * inheritance relationships between classes.
     *
     * @param {!object} me Should always be "this".
     * @param {string} methodName The method name to call. Calling superclass
     *     constructor can be done with the special string 'constructor'.
     * @param {...*} var_args The arguments to pass to superclass
     *     method/constructor.
     * @return {*} The return value of the superclass method/constructor.
     */
    childCtor.base = function (me, methodName) {
      var args = Array.prototype.slice.call(arguments, 2);
      return parentCtor.prototype[methodName].apply(me, args);
    };
  };
}(window));
