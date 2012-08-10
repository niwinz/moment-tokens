moment-tokens
=============

Some usefull tokens translations for momentjs_, this library adds ``strftime`` method for unix style and ``phpFormat`` for php formating tokens. This library only translates tokes to the native `momentjs` tokens.

.. _momentjs: https://github.com/timrwood/moment

Compatibility
-------------

* Browser (Tested on Chrome, Firefox, Opera)
* Nodejs

Instalation
-----------

Actually, you can download the raw ``moment-tokens.js`` or clone this repository. In the near future I add this package to `npm` for nodejs users.

Usage
-----

NOTE: ``moment-tokens`` just adds some aditional methods to `moment`.

In the browser is as simple as::

    <script src="js/moment.js"></script>
    <script src="js/moment-tokens.js"></script>
    <script>
    console.log(moment().strftime("%m/%d/%y %I:%M %p %Z"));
    // This prints on console: ``01/17/12 08:54 PM EST``
    </script>

Same way on nodejs::

    var moment = require("moment-tokens");
    console.log(moment().strftime("%m/%d/%y %I:%M %p %Z"));

TODO
----

* strptime - parse dates with unix tokens
* phpparse - parse dates with php tokens

Contributing
------------

Be free to send pull-request.

License
-------

BSD License

