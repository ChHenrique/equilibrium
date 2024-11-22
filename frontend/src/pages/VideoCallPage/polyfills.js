// polyfills.js
window.global = window;
if (typeof process === 'undefined') {
    global.process = {
      nextTick: function(fn) {
        setTimeout(fn, 0); // Use setTimeout to mimic nextTick behavior
      }
    };
  }