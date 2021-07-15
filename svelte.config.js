import adapterVercel from '@sveltejs/adapter-vercel'
import adapterNetlify from '@sveltejs/adapter-netlify'
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		adapter: adapterNetlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
