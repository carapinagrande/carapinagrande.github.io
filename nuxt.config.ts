import { defineNuxtConfig } from 'nuxt'
import vuetify from '@vuetify/vite-plugin'

export default defineNuxtConfig({
  css: ['vuetify/styles'],
  ssr: false, // Disable Server Side rendering
  generate: {
    subFolders: false
  },
  target: 'static',
  vite: {
    plugins: [
      vuetify(),
      {
        // https://github.com/nuxt/framework/issues/2798
        configResolved (config) {
          const idx = config.plugins.findIndex(plugin => plugin.name === 'vuetify:import')
          const vueIdx = config.plugins.findIndex(plugin => plugin.name === 'vite:vue')
          if (~idx && idx < vueIdx) {
            const plugin = config.plugins[idx]
            config.plugins.splice(idx, 1)
            config.plugins.splice(vueIdx, 0, plugin)
          }
        },
      },
    ],
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})