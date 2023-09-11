import { sentrySvelteKit } from "@sentry/sveltekit";
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "myles-4b5c4c30d",
            project: "javascript-sveltekit"
        }
    }), sveltekit(), purgeCss()],
	build: {
		target: "esnext"
	}
});