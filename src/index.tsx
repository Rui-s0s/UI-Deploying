import { Hono } from 'hono'
import routes from './routes/routes'
import { getConnInfo } from 'hono/cloudflare-workers'
import { readdirSync } from 'node:fs'
import { serveStatic } from 'hono/cloudflare-workers'


type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// Serve static files from the public directory
app.use('/css/*', serveStatic())

app.route('/', routes)

// --- UTILITY ENDPOINTS ---

app.get('/debug', (c) => {
  try {
    const files = readdirSync('./public', { recursive: true })
    return c.json({ 
      directory: './public',
      files 
    })
  } catch (err: any) {
    return c.json({ error: err.message }, 500)
  }
})

app.get('/check-ip', (c) => {
  const ip = c.req.header('CF-Connecting-IP') || 'Local/Unknown'
  return c.text(`Your IP is: ${ip}`)
})

app.get('/info', (c) => {
  const info = getConnInfo(c)
  const ip = info.remote.address
  return c.json({ ip, runtime: 'Cloudflare Workers', status: 'Online' })
})

export default app
