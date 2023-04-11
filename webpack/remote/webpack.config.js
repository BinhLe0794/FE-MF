import HtmlWebpackPlugin from 'html-webpack-plugin';
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

export const entry = './src/index';
export const cache = false;
export const mode = 'development';
export const devtool = 'source-map';
export const optimization = {
	minimize: false,
};
export const output = {
	publicPath: 'auto',
};
export const resolve = {
	extensions: ['.jsx', '.js', '.json', '.mjs'],
};
export const module = {
	rules: [
		{
			test: /\.m?js$/,
			type: 'javascript/auto',
			resolve: {
				fullySpecified: false,
			},
		},
		{
			test: /\.jsx?$/,
			loader: require.resolve('babel-loader'),
			exclude: /node_modules/,
			options: {
				presets: [require.resolve('@babel/preset-react')],
			},
		},
	],
};
export const plugins = [
	new ModuleFederationPlugin({
		name: 'app_03',
		filename: 'remoteEntry.js',
		remotes: {
			app_01: 'app_01@http://localhost:3001/remoteEntry.js',
		},
		exposes: {
			'./Button': './src/Button',
		},
		shared: {
			'react-dom': {
				singleton: true,
			},
			react: {
				singleton: true,
			},
		},
	}),
	new HtmlWebpackPlugin({
		template: './public/index.html',
	}),
];
