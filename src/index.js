const request = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, !0);
  xhr.onreadystatechange = () =>
    xhr.readyState === 4 && xhr.responseText.length > 0 && cb(xhr.responseText);
  xhr.send();
};

const scan = opts =>
  [].forEach.call(document.querySelectorAll(`[${opts.attr}]`), e =>
    request(opts.baseHref + e.getAttribute(opts.attr), html => {
      e.outerHTML = html;
    })
  );

export const loadHTML = (opts = { baseHref: "", attr: "data-defer-html" }) =>
  !document.body
    ? window.addEventListener("load", () => scan(opts))
    : scan(opts);
