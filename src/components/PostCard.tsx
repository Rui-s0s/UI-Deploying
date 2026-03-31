import { Post } from '../types';

export const PostCard = ({ post }: { post: Post }) => (
    <a href={`/four/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div class="post-card" style={{
            padding: '15px',
            borderBottom: '1px solid #eff3f4',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                <strong>{post.author}</strong>
                <span style={{ color: '#536471' }}>@{post.handle} · {post.timestamp}</span>
            </div>
            <div style={{ fontSize: '15px', lineHeight: '20px' }}>{post.content}</div>
            <div style={{ marginTop: '10px', color: '#536471', fontSize: '13px' }}>
                ♥ {post.likes} Likes
            </div>
        </div>
    </a>
);