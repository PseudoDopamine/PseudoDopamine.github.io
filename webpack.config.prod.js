// NPM package imports
const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// Project module imports
const common = require("./webpack.common.js");

// Project module exports
module.exports = merge(common, {
	mode: "production",
	plugins: [
		new htmlWebpackPlugin({ template: "./public/index.html" }),
		new CopyPlugin({ patterns: [
			{ from: "public/res/css", to: "res/css" },
			{ from: "public/res/js/vendor", to: "res/js/vendor" },
			{ from: "public/res/assets/img", to: "res/assets/img" },
			{ from: "public/404.html", to: "404.html" },
			{ from: "public/favicon.ico", to: "favicon.ico" },
			{ from: "public/robots.txt", to: "robots.txt" },
			{ from: "public/site.webmanifest", to: "site.webmanifest" },
		]})
	]
});
