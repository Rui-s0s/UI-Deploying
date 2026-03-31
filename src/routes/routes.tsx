import { Hono } from 'hono'
import Home from '../layouts/home'
import One from '../layouts/one'
import Two from '../layouts/two'
import Three from '../layouts/three'
import { MainLayout } from '../components/MainLayout'
import { PostCard } from '../components/PostCard'
import { PostDetailPage } from '../pages/PostDetailsPage';

const routes = new Hono()

const posts = [{ id: '1', author: 'Gemini', handle: 'google', content: 'Building with Hono is fast!', timestamp: '5m', likes: 10 }];
const comments = [{ id: 'c1', postId: '1', author: 'User1', text: 'Agreed! JSX on the server is great.' }];

routes.get('/', (c) => c.html(<Home />))
routes.get('/one', (c) => c.html(<One />))
routes.get('/two', (c) => c.html(<Two />))
routes.get('/three', (c) => c.html(<Three />))


routes.get('/four', (c) => c.html(<MainLayout title='four'>
    {posts.map(p => <PostCard post={p} />)}
</MainLayout>))

routes.get('/four/:id', (c) => {
    const id = c.req.param('id');
    const post = posts.find(p => p.id === id);
    if (!post) return c.text('Post not found', 404);

    return c.html(
        <MainLayout title="Post">
            <PostDetailPage post={post} comments={comments.filter(com => com.postId === id)} />
        </MainLayout>
    );
});

export default routes
