// NPM package imports
const { merge } = require("webpack-merge");

// Project module imports
const common = require("./webpack.common.js");

// Project module exports
module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		liveReload: true,
		hot: true,
		open: true,
		static: ["./public"]
	}
});
