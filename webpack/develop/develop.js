import webpack from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import baseConfig from '../base'

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
	devtool: 'cheap-inline-module-source-map',
	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin(),
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.js$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
	],
}
