import { Hono } from 'hono'
import Home from '../layouts/home'
import One from '../layouts/one'
import Two from '../layouts/two'
import Three from '../layouts/three'
import ComingSoon from '../layouts/soon'

const routes = new Hono()

routes.get('/', (c) => c.html(<Home />))
routes.get('/faq', (c) => c.html(<One />))
routes.get('/home', (c) => c.html(<Two />))
routes.get('/plm', (c) => c.html(<ComingSoon pageTitle='/plm/ - Plomeria' />))
routes.get('/el', (c) => c.html(<ComingSoon pageTitle='/el/ - Electricidad'/>))
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

routes.get('/mk', async (c) => {
    const sort = c.req.query('sort')
    const query = c.req.query('query')
    const category = c.req.query('category')
    
    // Simulate server-side fetching delay
    await sleep(2000)
    
    return c.html(<Three sort={sort} query={query} category={category} />)
})

export default routes