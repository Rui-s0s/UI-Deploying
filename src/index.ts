import { Hono } from 'hono'
import { getConnInfo } from 'hono/cloudflare-workers'


type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// --- 1. CREATE: Add a new user ---
app.post('/users', async (c) => {
  try {
    const { name, email } = await c.req.json()

    const result = await c.env.DB.prepare(
      'INSERT INTO users (name, email) VALUES (?, ?)'
    )
      .bind(name, email)
      .run()

    return c.json({ success: true, message: 'User created' }, 201)
  } catch (e) {
    if (e instanceof Error && e.message.includes('UNIQUE constraint failed')) {
      return c.json({ success: false, error: 'That email is already taken!' }, 409)
    }
    return c.json({ success: false, error: 'Internal Server Error' }, 500)
  }
})

// --- 2. READ: Get all users ---
app.get('/users', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM users').all()
  return c.json(results)
})

// --- 3. UPDATE: Change a user's name ---
app.put('/users/:id', async (c) => {
  const id = c.req.param('id')
  const { name } = await c.req.json()

  const result = await c.env.DB.prepare('UPDATE users SET name = ? WHERE id = ?')
    .bind(name, id)
    .run()

  if (result.meta.changes === 0) {
    return c.json({ error: 'User not found' }, 404)
  }

  return c.json({ message: 'User updated' })
})

// --- 4. DELETE: Remove a user ---
app.delete('/users/:id', async (c) => {
  const id = c.req.param('id')

  await c.env.DB.prepare('DELETE FROM users WHERE id = ?').bind(id).run()

  return c.json({ message: 'User deleted' })
})

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