import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV !== 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// Comment the paths if wants to run in dev mode.
		paths: production
			? {
					base: '/jellyfin-request'
			  }
			: undefined,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
