'use strict'

(() => {
    if (document.documentElement.textContent === undefined) {
      Object.defineProperty(Node.prototype, 'textContent', { 
        get: function() {
          return this.innerText;
        },
        set: function(value) {
          this.innerText = value;
        } 
      });
    }
  })(); 