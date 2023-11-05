import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			precompress: true,
			strict: false
		}),

		prerender: { default: true },
		trailingSlash: 'always',
		alias: {
			$components: path.resolve('./src/lib/components'),
			$icons: path.resolve('./src/lib/icons')
		}
	}
};

export default config;
