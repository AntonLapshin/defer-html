# defer-html

If you want to make your document smaller (just to remind you this is the most critical resource, nothing happens in the browser until it's loaded) and you have a bunch of hidden items or items that are not visible on the initial screen then you can defer it!

Here is an [example](https://antonlapshin.github.io/defer-html/)

## Install

```
npm i defer-html
```

## Usage

1. Extract a bunch of html you are going to defer into a file `hidden-posts.html` and place it in the same folder as `index.html`

hidden-posts.html

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

2. Add a placeholder in `index.html` file

```html
<p data-defer-html="hidden-posts.html"></p>
```

It could be `p`, `div` or any other DOM element, doesn't matter. Only data-attr makes sense over here.

3. Include `deferHTML.js` and call `loadHTML` method:

- via ES6 module

```js
import { loadHTML } from 'defer-html';

loadHTML();
```

- via script tag
```html
<script src="defer-html/deferHTML.js"></script>
<script>
  window.deferHTML.loadHTML();
</script>
```

## Options

`loadHTML` takes an object which may contain the following parameters:

```js
loadHTML({
  baseHref: 'content/',  // '' by default,
  attr: 'my-custom-attr' // 'data-defer-html' by default
})
```

Another approach from WebComponents API: [link rel="import"](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)