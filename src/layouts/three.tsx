import { FC } from 'hono/jsx'

const Three: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Page Three - Paragraph</title>
                <link rel="stylesheet" href="/src/css/three.css" />
            </head>
            <body>
                <main>
                    <div class="content-wrapper">
                        <h1>Page Three</h1>
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
