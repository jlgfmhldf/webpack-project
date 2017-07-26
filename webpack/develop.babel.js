import baseConfig from './base.js'

export default {
	...baseConfig,
	entry: [
		...baseConfig.entry,
		'webpack-hot-middleware/client'
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	development: 'cheap-inline-module-source-map',
	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin(),
	]

}
