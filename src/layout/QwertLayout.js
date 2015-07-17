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
   * @returns {Keypane.Row[]}
   * @private
   */
  Keypane.Layout.Qwert.prototype.constructRows = function () {
    var self = this;

    Keypane.convertKeyRows([
        [ // Line 1
          new Keypane.Key(
            new Keypane.Char('"'), new Keypane.Char("'")
          ),
          new Keypane.Key(
            new Keypane.Char('!'), new Keypane.Char('1'), new Keypane.Char('¹')
          ),
          new Keypane.Key(
            new Keypane.Char('@'), new Keypane.Char('2'), new Keypane.Char('²')
          ),
          new Keypane.Key(
            new Keypane.Char('#'), new Keypane.Char('3'), new Keypane.Char('³')
          ),
          new Keypane.Key(
            new Keypane.Char('$'), new Keypane.Char('4'), new Keypane.Char('£')
          ),
          new Keypane.Key(
            new Keypane.Char('%'), new Keypane.Char('5'), new Keypane.Char('¢')
          ),
          new Keypane.Key(
            new Keypane.Char('¨'), new Keypane.Char('6'), new Keypane.Char('¬')
          ),
          new Keypane.Key(
            new Keypane.Char('&'), new Keypane.Char('7')
          ),
          new Keypane.Key(
            new Keypane.Char('*'), new Keypane.Char('8')
          ),
          new Keypane.Key(
            new Keypane.Char('('), new Keypane.Char('9')
          ),
          new Keypane.Key(
            new Keypane.Char(')'), new Keypane.Char('0')
          ),
          new Keypane.Key(
            new Keypane.Char('_'), new Keypane.Char('-')
          ),
          new Keypane.Key(
            new Keypane.Char('+'), new Keypane.Char('='), new Keypane.Char('§')
          )
        ],
        [ // Line 2
          new Keypane.Key(
            new Keypane.Char('Tab', null, function () {
              console.log('Tab pressed');
            }), null, null, 60
          ),
          'Q', 'W', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
          new Keypane.Key(
            new Keypane.Char('`'), new Keypane.Char('´')
          ),
          new Keypane.Key(
            new Keypane.Char('{'), new Keypane.Char('['), new Keypane.Char('ª')
          )
        ],
        [ // Line 3
          'A', 'S', 'D', 'F', 'G', 'H', 'J', 'D', 'K', 'L', 'Ç',
          new Keypane.Key(
            new Keypane.Char('^'), new Keypane.Char('~')
          ),
          new Keypane.Key(
            new Keypane.Char('}'), new Keypane.Char(']'), new Keypane.Char('º')
          )
        ],
        [ // Line 4
          '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
          new Keypane.Key(
            new Keypane.Char('<'), new Keypane.Char(',')
          ),
          new Keypane.Key(
            new Keypane.Char('>'), new Keypane.Char('.')
          ),
          new Keypane.Key(
            new Keypane.Char(':'), new Keypane.Char(';')
          ),
          new Keypane.Key(
            new Keypane.Char('?'), new Keypane.Char('/'), new Keypane.Char('°')
          )
        ]
      ], function (row) {
        self.addRow(row);
      }
    );
  };
}());
