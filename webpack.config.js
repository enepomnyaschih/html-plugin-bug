var path = require("path"),
	HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: "./app.js",

	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{ test: /\.html$/, loader: "raw-loader" }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "!!underscore!./template.html", // <---- Different path
			inject: "body",
			title: "HTML Webpack Plugin demo",
			suffix: ".min"
		})
	]
};
