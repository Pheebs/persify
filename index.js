(function(name, definition) {
  if (typeof define === 'function') {
    // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = definition();
  } else {
    // Browser
    var theModule = definition(),
      global = this,
      old = global[name];
    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('persify', function() {
  return function(str) {
    if (typeof str !== 'string') {
      if (str) {
        switch (typeof str) {
          case 'object':
            str = 'object';
            break;
          case 'function':
            str = 'function';
            break;
          default:
            str = str + '';
        }
      } else {
        str = str + '';
      }
    }
    return str.replace(/\d+/g, function(digit) {
      var ret = '';
      for (var i = 0, len = digit.length; i < len; i++) {
        ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
      }
      return ret;
    });
  };
});
