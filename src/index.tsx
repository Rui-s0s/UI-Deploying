import { Hono } from 'hono'
import routes from './routes/routes'
import { getConnInfo } from 'hono/cloudflare-workers'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()


app.route('/', routes)

// --- UTILITY ENDPOINTS ---

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
