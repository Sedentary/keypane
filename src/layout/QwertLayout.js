/**
 * @requires Layout.js
 */

(function () {
  'use strict';

  /**
   * Qwert keyboard layout
   *
   * @constructor
   * @extends {Keypane.Layout}
   */
  Keypane.Layout.Qwert = function () {
    Keypane.Layout.Qwert.base(this, 'constructor');
    this.constructRows();
  };

  Keypane.inherits(Keypane.Layout.Qwert, Keypane.Layout);

  /**
   * Returns an array of rows for the layout.
   * @param {Keypane.Layout} current
   * @returns {Keypane.KeyRow[]}
   * @private
   */
  Keypane.Layout.Qwert.prototype.constructRows = function () {
    var self = this;

    Keypane.convertKeyRows([
        [ // Line 1
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
        ],
        [ // Line 2
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
        ],
        [ // Line 3
          'A', 'S', 'D', 'F', 'G', 'H', 'J', 'D', 'K', 'L', 'Ç',
          new Keypane.Key(
            new Keypane.KeyChar('^'), new Keypane.KeyChar('~')
          ),
          new Keypane.Key(
            new Keypane.KeyChar('}'), new Keypane.KeyChar(']'), new Keypane.KeyChar('º')
          )
        ],
        [ // Line 4
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
        ]
      ], function (row) {
        self.addRow(row);
      }
    );
  };
}());
