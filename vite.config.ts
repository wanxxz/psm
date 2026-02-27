import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import macros from 'unplugin-parcel-macros'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    macros.vite(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './routes',
      generatedRouteTree: './routeTree.gen.ts',
      virtualRouteConfig: './src/routes.ts'
    }),
    viteReact()
  ],
  build: {
    // Lightning CSS produces a much smaller CSS bundle than the default minifier.
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        // Bundle all S2 and style-macro generated CSS into a single bundle instead of code splitting.
        // Because atomic CSS has so much overlap between components, loading all CSS up front results in
        // smaller bundles instead of producing duplication between pages.
        manualChunks(id) {
          if (/macro-(.*)\.css$/.test(id) || /@react-spectrum\/s2\/.*\.css$/.test(id)) {
            return 's2-styles'
          }
        }
      }
    }
  },
  ssr: {
    noExternal: [/^@react-spectrum\/.*/]
  }
})
