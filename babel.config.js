module.exports = {
	presets: [
		'@vue/app',
		[
			'env',
			{
				targets: {
					browsers: ['last 2 Chrome versions'],
				},
			},
		],
	],
	plugins: [
		['transform-runtime', {
			polyfill: false,
			regenerator: true,
		}],
	],
};
