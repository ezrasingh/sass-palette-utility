const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'app');

module.exports = {
  entry: path.join(APP_PATH, 'main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	resolve: {
		alias: {
			lib: path.resolve(__dirname, 'lib')
		}
	},
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Sass Palette Utility Demo',
        template: path.join(APP_PATH, 'index.html'),
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
				},
				meta: {
					'viewport' : 'width=device-width, initial-scale=1, shrink-to-fit=no',
					'theme-color': '#4285f4'
				}
    })
  ]
};
