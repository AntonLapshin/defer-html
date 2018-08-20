# defer-html

If you want to make your document smaller (just to remind you this is the most critical resource, nothing happens in the browser until it's loaded) and you have a bunch of hidden items or items that are not visible on the initial screen then you can defer it!

Here is an [example](https://antonlapshin.github.io/defer-html/)

## Install

```
npm i defer-html
```

## Usage

### Extract a bunch of html you are going to defer into a file `hidden-posts.html` and place it in the same folder as `index.html`

`hidden-posts.html`

```html
<div class="post hide">
  <p>Post 1</p>
</div>
<div class="post hide">
  <p>Post 2</p>
</div>
<div class="post hide">
  <p>Post 3</p>
</div>
```

### Add a placeholder in `index.html` file

```html
<p data-defer-html="hidden-posts.html"></p>
```

It could be `p`, `div` or any other DOM element, doesn't matter. Only data-defer-html makes sense over there.

### Include `deferHtml.js` and call `loadHtml` method:

- via ES6 module

```js
import { loadHtml } from 'defer-html';

loadHtml();
```

- via script tag
```html
<script src="defer-html/deferHtml.js"></script>
<script>
  window.deferHtml.loadHtml();
</script>
```

## Options

`loadHtml` takes an object which may contain the following parameters:

```js
loadHtml({
  baseHref: 'content/',  // '' by default,
  attr: 'my-custom-attr' // 'data-defer-html' by default
})
```

## Document `event`

Whenever an html file is loaded `defer-html:loaded` event is fired.

```js
document.addEventListener("defer-html:loaded", ({ detail }) => {
  console.log(`${detail.name} file has been loaded`);
});
```

Another approach from WebComponents API: [link rel="import"](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)

Check out a gulp plugin to inject lazy html loading into your build system [gulp-defer-html](https://www.npmjs.com/package/gulp-defer-html)