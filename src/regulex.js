if (typeof define !== 'function') var define = require('amdefine')(module);
define(['./Kit','./NFA','./RegExp','./parse'],
function (Kit,NFA,RegExp,parse) {
  return { // I hate require.js
    Kit:Kit,
    NFA:NFA,
    RegExp:RegExp,
    parse:parse
  };
});
