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
			{ test: /\.html$/, loader: "raw-loader" } // <---- !!!!! PROBLEM ORIGIN !!!!!
			/*
			Changing it to
			{ test: /\.jw.html$/, loader: "raw-loader" }
			fixes the problem
			*/
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "../template.html",
			inject: "body",
			title: "HTML Webpack Plugin demo",
			suffix: ".min"
		})
	]
};
