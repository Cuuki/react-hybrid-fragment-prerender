import {resolve} from 'path';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import handlebars from 'vite-plugin-handlebars';

// https://vitejs.dev/config/
export default defineConfig({
    root: 'client/', plugins: [react({
        jsxRuntime: 'classic'
    }), handlebars({
        partialDirectory: resolve(__dirname, 'client/out/fragment'),
    }),]
})
