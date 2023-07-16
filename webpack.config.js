const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, "dist/main"),
            filename: "main.js",

        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
        resolve: {
            extensions: [".js", ".ts", ".jsx", ".tsx"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    exclude: /node_modules/,
                    use: "ts-loader"
                },
                {
                    test: /\.(js|jsx)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [ "@babel/preset-react", "@babel/preset-typescript"],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                    ],
                },
                {
                    test: /\.(png|jpeg|svg|ttf)$/i,
                    type: "asset/resource",
                }
            ]
        },
    }
]