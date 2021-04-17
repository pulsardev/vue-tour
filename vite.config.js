import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

const path = require('path')

module.exports = {
  outDir: 'dist',
  publicDir: 'public-vite',
  plugins: [vue(), copy({
    targets: [
      { src: 'dist/vue-tour.umd.js', dest: 'public' },
      { src: 'dist/vue-tour.css', dest: 'public' }
    ]
  })],
  build: {
    optimizeDeps: {
      exclude: ['public']
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'VueTour'
    },
    rollupOptions: {
      plugins: [
        dynamicImportVars()
      ],
      external: ['vue'],
      output: [
        {
          assetFileNames: 'vue-tour.css',
          format: 'es',
          globals: {
            vue: 'Vue'
          }
        },
        {
          assetFileNames: 'vue-tour.css',
          format: 'umd',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
}
