(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.loadHTML = {})));
}(this, (function (exports) { 'use strict';

  let xhr;
  const attr = "data-defer-html",
    load = (url, cb) => {
      xhr = new XMLHttpRequest();
      xhr.open("GET", url, !0);
      xhr.onreadystatechange = () =>
        xhr.readyState === 4 &&
        xhr.responseText.length > 0 &&
        cb(xhr.responseText);
      xhr.send();
    };

  const loadHTML = (baseHref = '') => {
    [].forEach.call(document.querySelectorAll(`div[${attr}]`), e =>
      load(baseHref + e.getAttribute(attr), html => {
        e.outerHTML = html;
      })
    );
  };

  exports.loadHTML = loadHTML;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
