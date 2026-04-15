import { Hono } from 'hono'
import Home from '../layouts/home'
import One from '../layouts/one'
import Two from '../layouts/two'
import Three from '../layouts/three'

const routes = new Hono()

routes.get('/', (c) => c.html(<Home />))
routes.get('/faq', (c) => c.html(<One />))
routes.get('/home', (c) => c.html(<Two />))
routes.get('/mk', (c) => c.html(<Three />))

export default routes