(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.deferHTML = {})));
}(this, (function (exports) { 'use strict';

  const load = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, !0);
    xhr.onreadystatechange = () =>
      xhr.readyState === 4 && xhr.responseText.length > 0 && cb(xhr.responseText);
    xhr.send();
  };

  const loadHTML = (opts = { baseHref: "", attr: "data-defer-html" }) => {
    const items = document.querySelectorAll(`[${opts.attr}]`);
    console.log(items);
    [].forEach.call(document.querySelectorAll(`[${opts.attr}]`), e =>
      load(opts.baseHref + e.getAttribute(opts.attr), html => {
        e.outerHTML = html;
      })
    );
  };

  exports.loadHTML = loadHTML;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
