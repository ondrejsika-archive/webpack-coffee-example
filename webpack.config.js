module.exports = {
entry: './index.coffee',
  output: {
    filename: 'build/bundle.js'
  },
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: "coffee" }
		]
	},
	resolve: {
		extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
	}
}
