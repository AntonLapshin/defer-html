export default {
  input: "src/index.js",
  output: [{
    format: "umd",
    name: "deferHTML",
    file: "bin/deferHTML.js"
  }, {
    format: "umd",
    name: "deferHTML",
    file: "example/defer-html/deferHTML.js"
  }]
};
