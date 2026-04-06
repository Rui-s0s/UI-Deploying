import { FC } from 'hono/jsx'
import { ParagraphPostCard } from '../components/PostCard'
import { hardcodedPosts } from '../models/posts'

const Three: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>/mk/ - Mecanica</title>
                <link rel="stylesheet" href="/css/three.css" />
            </head>
            <body>
                <header>
                    Paragraph
                </header>
                <main>
                    <div class="content-wrapper">
                        <h1>/mk/ - Mecanica</h1>

                        <form action="/search" method="get" class="search-filter-form">
                            <input type="text" name="query" placeholder="Search posts..." required />

                            <select name="category">
                                <option value="all">All Categories</option>
                                <option value="images">Images Only</option>
                                <option value="text">Text Only</option>
                            </select>

                            <select name="sort">
                                <option value="newest">Newest First</option>
                                <option value="top-rated">Top Rated</option>
                            </select>

                            <button type="submit">Search</button>
                        </form>

                        <div class="posts-feed">
                            {hardcodedPosts.map(post => (
                                <ParagraphPostCard post={post} />
                            ))}
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
