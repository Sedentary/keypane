(function() {
  'use strict';

  /**
   *
   * @type {{}}
   */
  Keypane.KeyUtils = {};

  /**
   *
   * @param {Array.*} rows
   * @returns {Keypane.KeyRow[]}
   */
  Keypane.KeyUtils.convertKeyRows = function (rows) {
    for (var row in rows) {
      row = this.convertKeyRow(row);
    }
  };

  /**
   *
   * @param {Array.*} keys
   * @returns {Keypane.KeyRow}
   */
  Keypane.KeyUtils.convertKeyRow = function (row) {
    if (typeof row !== Keypane.KeyRow) {
      for (var key in row) {
        key = this.convertKey(key);
      }
    }
    return row;
  };

  /**
   *
   * @param {*} key
   * @returns {Keypane.Key}
   */
  Keypane.KeyUtils.convertKey = function (key) {
    if (typeof key !== Keypane.Key) {
      key = new Keypane.Key(key);
    }
    return key;
  };

}());
