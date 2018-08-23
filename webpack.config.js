const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/article.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'orders.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/orders.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'cart.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/cart.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'text.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/text.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'enter.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/enter.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'search.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/search.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'company.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/company.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'delivery.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/delivery.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'product-pg.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/product-pg.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'ordering.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/ordering.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'category.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/category.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'reducer.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/reducer.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'reducer-8.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/reducer-8.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				"window.$": "jquery"
			})
			// new webpack.ProvidePlugin({
			// 	GoogleMapsLoader: 'google-maps'
			// }),
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};