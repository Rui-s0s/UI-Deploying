import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    devServer({
      entry: 'src/index.tsx',
      injectClientScript: true
    }),
    // Custom plugin to watch the public folder and trigger a reload
    {
      name: 'watch-public',
      configureServer(server) {
        server.watcher.add('public')
        server.watcher.on('change', (file) => {
          if (/[\\/]public[\\/]/.test(file)) {
            server.ws.send({ type: 'full-reload' })
          }
        })
      }
    }
  ]
})
