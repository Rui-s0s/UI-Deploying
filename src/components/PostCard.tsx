import { Post } from '../types';

export const ParagraphPostCard = ({ post }: { post: Post }) => {
    const stars = '★'.repeat(post.rating || 0) + '☆'.repeat(5 - (post.rating || 0));

    return (
        <article class="paragraph-post-card">
            <div class="post-media">
                <img 
                    src={post.imageUrl || "https://via.placeholder.com/300"} 
                    alt={post.content}
                />
            </div>
            <div class="post-content">
                <div class="post-header">
                    <span class="post-id">ID: {post.id}</span>
                    <span class="post-rating">{stars}</span>
                </div>
                <div class="post-body">
                    {post.content}
                </div>
                <div class="post-actions">
                    <button>Reply</button>
                    <div class="star-rating-input">
                        {[5, 4, 3, 2, 1].map((num) => (
                            <>
                                <input 
                                    type="radio" 
                                    id={`star-${num}-${post.id}`} 
                                    name={`rating-${post.id}`} 
                                    value={num} 
                                    checked={post.rating === num}
                                />
                                <label for={`star-${num}-${post.id}`}>★</label>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};
