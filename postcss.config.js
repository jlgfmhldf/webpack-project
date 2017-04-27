const path = require('path')

const root = path.join(__dirname, './app')

/* eslint-disable global-require */
module.exports = webpack => ({
    plugins: function () {
        return [
            require('precss'),
            require('postcss-custom-properties'),
            require('autoprefixer'),
        ];
    }
})
