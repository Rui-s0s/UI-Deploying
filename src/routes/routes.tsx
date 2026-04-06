import { Hono } from 'hono'
import Home from '../layouts/home'
import One from '../layouts/one'
import Two from '../layouts/two'
import Three from '../layouts/three'

const routes = new Hono()

routes.get('/', (c) => c.html(<Home />))
routes.get('/one', (c) => c.html(<One />))
routes.get('/two', (c) => c.html(<Two />))
routes.get('/three', (c) => c.html(<Three />))

export default routes
