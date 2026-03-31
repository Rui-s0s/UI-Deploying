import { Post, Comment } from '../types';
import { PostCard } from '../components/PostCard';

export const PostDetailPage = ({ post, comments }: { post: Post, comments: Comment[] }) => (
    <div>
        <PostCard post={post} />
        <div style={{ padding: '15px', borderBottom: '1px solid #eff3f4' }}>
            <form action={`/four/${post.id}/comment`} method="post">
                <textarea
                    name="text"
                    placeholder="Post your reply"
                    style={{ width: '100%', border: 'none', outline: 'none', fontSize: '18px', resize: 'none' }}
                />
                <div style={{ textAlign: 'right' }}>
                    <button type="submit" style={{ background: '#1d9bf0', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
                        Reply
                    </button>
                </div>
            </form>
        </div>
        {comments.map(c => (
            <div style={{ padding: '15px', borderBottom: '1px solid #eff3f4' }}>
                <strong>{c.author}</strong>
                <p style={{ margin: '5px 0 0 0' }}>{c.text}</p>
            </div>
        ))}
    </div>
);