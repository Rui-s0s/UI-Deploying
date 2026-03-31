import { FC } from 'hono/jsx'

const Three: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Page Three - Paragraph</title>
                <link rel="stylesheet" href="/css/three.css" />
            </head>
            <body>
                <main>
                    <div class="content-wrapper">
                        <h1>/mk/ - Mecanica</h1>
                        <hr />
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
                        <p>This is the third page. It is now aligned with the rest of the site's aesthetic, providing a cohesive experience.</p>
                        <a href="/" class="back-link">← Back to Home</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default Three
