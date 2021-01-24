const path = require("path");
//const ExtractCSS = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                // webpack.config is read from bottom to top
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",                   // 3) read .css
                    {
                        loader: "postcss-loader",   // 2) process .css with postcss inside webpack
                        options: {
                            postcssOptions: {

                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            // options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"                  // 1) convert .sass or /scss to .css
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
    ],
};

module.exports = config;