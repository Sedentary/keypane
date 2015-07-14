/**
 * @requires /vendor/fabric.min.js
 */

(function (window, fabric) {
  'use strict';

  window.Keypane = window.Keypane || {};

  // Keypane props
  Keypane.canvas = null;
  /**
   *
   * @type {Keypane.Keyboard}
   */
  Keypane.keyboard = null;
  Keypane.shift = false;
  Keypane.ctrl = false;
  Keypane.alt = false;
  Keypane.altGr = false;
  Keypane.currentKey = null;

  /**
   *
   */
  Keypane.init = function () {
    Keypane.canvas = new fabric.Canvas('keypane-canvas');

    Keypane.keyboard = new Keypane.Keyboard(new Keypane.Layout.Qwert());

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
   * @param {number} line
   * @param {number} position
   * @param {object} key
   */
  Keypane.createKey = function (line, position, key) {

    _registerKeyEvents(key);

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
    var biggestKeyLine = Keypane.findBiggestKeyLine();
    Keypane.canvas.setWidth(Keypane.findLineWidth(biggestKeyLine));
    Keypane.canvas.setHeight(43.2 * Keypane.keyboard.getLayout().getRows().length);
  };

  /**
   *
   * @returns {*}
   */
  Keypane.findBiggestKeyLine = function () {
    var line = null;
    var currentSize = 0;
    for (var l in Keypane.keyboard.getLayout().getRows()) {
      var lineSize = Keypane.findLineWidth(Keypane.keyboard.getLayout().getRows()[l]);
      if (currentSize < lineSize) {
        currentSize = lineSize;
        line = Keypane.keyboard.getLayout().getRows()[l];
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

}(window, fabric));
