module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "@babel/env",
                {
                  modules: false
                }
              ],
              "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  entry: {
    index: "./lib/index"
  },
  externals: {
    react: "react",
    "styled-components": "styled-components"
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    library: "react-single-select",
    libraryTarget: "umd"
  }
};
