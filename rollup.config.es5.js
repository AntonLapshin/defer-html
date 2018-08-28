import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      format: "umd",
      name: "deferHtml",
      file: "bin/deferHtml.es5.js"
    },
    {
      format: "umd",
      name: "deferHtml",
      file: "example/defer-html/deferHtml.es5.js"
    }
  ],
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          "@babel/env",
          {
            modules: false
          }
        ]
      ]
    })
  ]
};
