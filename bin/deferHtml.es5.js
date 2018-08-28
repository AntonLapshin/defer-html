(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.deferHtml = {})));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var request = function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, !0);

    xhr.onreadystatechange = function () {
      return xhr.readyState === 4 && xhr.responseText.length > 0 && cb(xhr.responseText);
    };

    xhr.send();
  };

  var eventName = "defer-html:loaded";

  var fire = function fire(name) {
    var event;

    if (window.CustomEvent) {
      event = new CustomEvent(eventName, {
        detail: {
          name: name
        }
      });
    } else {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, {
        name: name
      });
    }

    document.dispatchEvent(event);
  };

  var scan = function scan(opts) {
    return [].forEach.call(document.querySelectorAll("[".concat(opts.attr, "]")), function (e) {
      var filename = e.getAttribute(opts.attr);
      request(opts.baseHref + filename, function (html) {
        e.outerHTML = html;
        fire(filename);
      });
    });
  };

  var defaults = {
    baseHref: "",
    attr: "data-defer-html"
  };
  var loadHtml = function loadHtml() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    opts = _objectSpread({}, defaults, opts);
    !document.body ? window.addEventListener("load", function () {
      return scan(opts);
    }) : scan(opts);
  };

  exports.loadHtml = loadHtml;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
