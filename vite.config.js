import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://admin.sketchshaper.com',
	resolve: {
		alias: [
			{
				// "@": path.resolve(__dirname, "./src"),
				find: '@',
				replacement: path.resolve(__dirname, './src'),
			},
		],
	},

	server: {
		proxy: {
			'/api': {
				target: 'https://api.sketchshaper.com',
				changeOrigin: true,
				secure: true,
			},
		},
	},

	plugins: [
		rollupReplace({
			preventAssignment: true,
			values: {
				__DEV__: JSON.stringify(true),
				'process.env.NODE_ENV': JSON.stringify('development'),
			},
		}),
		react(),
	],
});
