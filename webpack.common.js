// NPM package imports
const Path = require("path");

// Project module exports
module.exports = {
	entry: { app: "./public/res/js/app.js" },
	output: {
		path: Path.resolve(__dirname, "dist"),
		clean: true,
		filename: "./public/res/js/app.js",
	}
};
