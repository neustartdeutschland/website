import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgLoader from 'vite-svg-loader'

console.log(process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'development' ? 'https://www.neustart-deutschland.com' : '/',
    plugins: [
        vue(),
        viteSvgLoader(),
    ],
    server: {
        port: 8080,
        hot: true
    }
})
