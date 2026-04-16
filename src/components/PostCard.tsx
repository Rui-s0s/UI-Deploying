import { Post } from '../types';

export const ParagraphPostCard = ({ post, index }: { post: Post, index?: number }) => {
    const stars = '★'.repeat(post.rating || 0) + '☆'.repeat(5 - (post.rating || 0));

    // Optimize Unsplash images: use WebP, reduce quality and size
    const optimizedImageUrl = post.imageUrl
        ? post.imageUrl.replace('auto=format&fit=crop&w=800&q=80', 'auto=format&fm=webp&fit=crop&w=500&q=50')
        : "https://via.placeholder.com/300";

    const isLCP = index === 0;

    return (
        <article class="paragraph-post-card" tabindex={0}>
            <div class="post-media">
                <img
                    src={optimizedImageUrl}
                    alt={post.content}
                    loading={isLCP ? "eager" : "lazy"}
                    decoding="async"
                    fetchpriority={isLCP ? "high" : "auto"}
                />
            </div>
            <div class="post-content">
                <div class="post-header">
                    <span class="post-id">{post.name} | {post.id}</span>
                    <span class="post-rating">{stars}</span>
                </div>
                <div class="post-body">
                    {post.content}
                </div>
                <div class="post-actions">
                    <button class="action-btn">Show More</button>
                    <button class="action-btn" onclick={`document.getElementById('rate-modal-${post.id}').showModal()`}>Rate</button>
                </div>

                <dialog id={`rate-modal-${post.id}`} class="rate-modal">
                    <form method="dialog">
                        <h3>Rate Post #{post.id}</h3>
                        <div class="star-rating-input">
                            {[5, 4, 3, 2, 1].map((num) => (
                                <>
                                    <input
                                        type="radio"
                                        id={`star-${num}-${post.id}`}
                                        name={`rating-${post.id}`}
                                        value={num}
                                    />
                                    <label for={`star-${num}-${post.id}`}>★</label>
                                </>
                            ))}
                        </div>
                        <textarea placeholder="Add a description about your rating..." class="rating-description"></textarea>
                        <div class="modal-actions">
                            <button type="button" onclick={`document.getElementById('rate-modal-${post.id}').close()`}>Cancel</button>
                            <button type="submit" class="submit-rate">Submit Rating</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </article>
    );
};
