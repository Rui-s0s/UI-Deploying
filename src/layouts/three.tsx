import { FC } from 'hono/jsx'
import { ParagraphPostCard } from '../components/PostCard'
import { hardcodedPosts } from '../models/posts'

const Three: FC<{ sort?: string; query?: string; category?: string }> = ({ sort, query, category }) => {
    let posts = [...hardcodedPosts]

    // Filtering logic
    if (query) {
        const q = query.toLowerCase()
        posts = posts.filter(post => {
            if (category === 'name') return post.name.toLowerCase().includes(q)
            if (category === 'id') return post.id.toLowerCase().includes(q)
            // Default: search both
            return post.name.toLowerCase().includes(q) || post.id.toLowerCase().includes(q)
        })
    }

    // Sorting logic
    if (sort === 'top-rated') {
        posts.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>/mk/ -  Mecanica</title>
                <link rel="stylesheet" href="/css/three.css" />
                <style>{`
                    .loading-overlay {
                        display: none;
                        position: fixed;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: rgba(255, 255, 238, 0.8);
                        z-index: 1000;
                        justify-content: center;
                        align-items: center;
                        font-weight: bold;
                        color: #800000;
                    }
                    .not-found {
                        padding: 3rem;
                        text-align: center;
                        background: #fffdf0;
                        border: 1px dashed #d3d3af;
                        margin: 2rem 0;
                        color: #800000;
                    }
                `}</style>
            </head>
            <body>
                <div id="loader" class="loading-overlay">FETCHING DATA...</div>
                <main>
                    <div class="content-wrapper">
                        <h1 tabindex={0}>/mk/ - Mecanica</h1>

                        <form action="/mk" method="get" class="search-filter-form" onsubmit="document.getElementById('loader').style.display='flex'">
                            <input type="text" name="query" placeholder="Search..." value={query || ''} />

                            <select name="category">
                                <option value="all" selected={category === 'all'}>Search All</option>
                                <option value="name" selected={category === 'name'}>Search by Name</option>
                                <option value="id" selected={category === 'id'}>Search by ID</option>
                            </select>

                            <select name="sort">
                                <option value="newest" selected={sort === 'newest'}>Newest First</option>
                                <option value="top-rated" selected={sort === 'top-rated'}>Top Rated</option>
                            </select>

                            <button type="submit">Search</button>
                        </form>

                        <div class="posts-feed" tabindex={0}>
                            {posts.length > 0 ? (
                                posts.map(post => (
                                    <ParagraphPostCard post={post} />
                                ))
                            ) : (
                                <div class="not-found">
                                    <h3>No specimens found matching your criteria.</h3>
                                    <p>Try adjusting your filters or search term.</p>
                                    <a href="/mk" style="color: #0e0e85; font-weight: bold;">Clear filters</a>
                                </div>
                            )}
                        </div>

                        <a href="/" class="back-link">← Regresar al inicio</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default Three
