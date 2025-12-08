import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	base: '/fast-food-app',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
})
