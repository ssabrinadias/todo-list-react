const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const environment = process.env.NODE_ENV !== "production";

module.exports = {
	mode: environment ? "development" : "production",
	entry: {
		index: path.resolve("./app/views/index.js")
	},
	output: {
		filename: "principal.js",
		path: __dirname + "/app/dist"
	},
	devServer: {
		contentBase: __dirname + "/app/dist",
		port: 8000
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true
			}),
			new OptimizeCssAssetsPlugin({})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "estilo.css"
		}),
		new HtmlWebpackPlugin({
			hash: true,
			minify: {
				html5: true,
				collapseWhitespace: true,
				removeComments: true
			},
			filename: "index.html",
			template: __dirname + "/main.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.s?[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {}
					}
				]
			}
		]
	}
};
