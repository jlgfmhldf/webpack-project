module.exports = () => ({
	plugins: [
		require('precss'),
		require('postcss-custom-properties'),
		require('autoprefixer'),
	]
})
