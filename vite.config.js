import { defineConfig, splitVendorChunkPlugin } from "vite"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
        login: 'login.html'
      }
    }
  },
  plugins: [splitVendorChunkPlugin(), ViteMinifyPlugin({})],
})