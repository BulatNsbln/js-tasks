'use strict'

(() => {
    if(Element.prototype.remove === undefined) {
      Element.prototype.remove = function() {
        let elem = this;
        let parent = elem.parentNode;
        if(parent) parent.removeChild(elem);
      }
    }
  })()