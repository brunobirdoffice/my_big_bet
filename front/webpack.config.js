const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: ["./src/styles/styles.scss", "./src/scripts/app.js"],
      output: {
        filename: "bundle.js"
      },
      devServer: {
        overlay: true,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization"
        }
      },
      module: {
        rules: [
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[hash:7].[ext]"
                }
              }
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "images/[name].[hash:7].[ext]",
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "index.html"
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
