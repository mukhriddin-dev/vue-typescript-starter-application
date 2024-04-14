import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    Components({dirs: ["src/components"]})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./test', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@ui": fileURLToPath(new URL('./src/components/ui', import.meta.url)),
      "@icons": fileURLToPath(new URL('./src/components/icons', import.meta.url)),
      "@containers": fileURLToPath(new URL('./src/components/containers', import.meta.url)),
      "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "@images":fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@stores": fileURLToPath(new URL('./src/stores', import.meta.url)),
      "@router": fileURLToPath(new URL('./src/router', import.meta.url)),
      "@plugins": fileURLToPath(new URL('./src/plugins', import.meta.url)),
      "@middleware": fileURLToPath(new URL("./src/middleware", import.meta.url)),
      "@composables": fileURLToPath(new URL('./src/composables', import.meta.url)),
      "@utils": fileURLToPath(new URL('./src/utils', import.meta.url)),
      "@service": fileURLToPath(new URL('./src/service', import.meta.url)),
      "@layouts": fileURLToPath(new URL('./src/layouts', import.meta.url)),
      "@pages": fileURLToPath(new URL('./src/views', import.meta.url)),
      "@templates": fileURLToPath(new URL('./src/templates', import.meta.url)),
      "@helpers": fileURLToPath(new URL('./src/helpers', import.meta.url)),
      "@constants": fileURLToPath(new URL('./src/constants', import.meta.url)),
      "@interfaces": fileURLToPath(new URL('./src/types/interfaces', import.meta.url)),
      "@enums": fileURLToPath(new URL('./src/types/enums', import.meta.url)),
      "@models": fileURLToPath(new URL('./src/types/models', import.meta.url)),
      "@types":  fileURLToPath(new URL('./src/types/types', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'components': [],
        },
      },
    },
  },
})
