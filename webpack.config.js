/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/bundle.[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'html-loader' }
				]
			},
			{
				test: /\.(png|jpe?g)$/,
				loader: 'file-loader',
				options: { name: './images/[name].[hash].[ext]' }
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: { name: './fonts/[name].[hash].[ext]' }
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};