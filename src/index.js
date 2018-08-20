const request = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, !0);
  xhr.onreadystatechange = () =>
    xhr.readyState === 4 && xhr.responseText.length > 0 && cb(xhr.responseText);
  xhr.send();
};

const eventName = "defer-html:loaded";

const fire = name => {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, { detail: { name } });
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, { name });
  }

  document.dispatchEvent(event);
};

const scan = opts =>
  [].forEach.call(document.querySelectorAll(`[${opts.attr}]`), e => {
    const filename = e.getAttribute(opts.attr);
    request(opts.baseHref + filename, html => {
      e.outerHTML = html;
      fire(filename);
    });
  });

const defaults = { baseHref: "", attr: "data-defer-html" };

export const loadHtml = (opts = {}) => {
  opts = { ...defaults, ...opts };
  !document.body
    ? window.addEventListener("load", () => scan(opts))
    : scan(opts);
};
