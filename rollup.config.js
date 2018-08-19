export default {
  input: "src/index.js",
  output: [{
    format: "umd",
    name: "deferHtml",
    file: "bin/deferHtml.js"
  }, {
    format: "umd",
    name: "deferHtml",
    file: "example/defer-html/deferHtml.js"
  }]
};
