// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
 build: {
   rollupOptions: {
     input: {
       home: resolve(__dirname, 'index.html'),
       player: resolve(__dirname, './vite-project-prueba/src/pages/players/index.html'),
       results: resolve(__dirname, './vite-project-prueba/src/pages/results/index.html'),
  
     },
   },
 },

  
})
