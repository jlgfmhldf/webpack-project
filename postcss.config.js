const cssnano = require('cssnano')

module.exports = () => ({
	plugins: [
		require("postcss-import"),
		require('postcss-normalize')({
			forceImport: true
		}),
		require('precss'),
		require('postcss-custom-properties'),
		require('postcss-size'),
		require('postcss-font-magician')({
			hosted: ['./static/fonts',]
		}),
		require("postcss-custom-media")(),
		require('postcss-axis'),
		require('css-mqpacker'),
		cssnano({
			preset: 'default'
		}),
		require('autoprefixer'),
	]
})
