/*!
 * Keypane
 *
 * MIT licensed
 * Copyright (C) 2015 Rodrigo Gomes da Silva
 */
(function (window, fabric) {
  'use strict';

  window.Keypane = window.Keypane || {};

  /**
   *
   */
  Keypane.init = function () {
    var canvas = new fabric.Canvas('keypane-canvas');

    var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 70,
      fill : 'red'
    });

    canvas.add(rect);
  };

}(window, fabric));
