import baseConfig from '../base'
import BabiliPlugin from 'babili-webpack-plugin'

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new BabiliPlugin(),
	]
}

