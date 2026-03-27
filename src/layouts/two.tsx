import { FC } from 'hono/jsx'

const Two: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Page Two - Paragraph</title>
                <link rel="stylesheet" href="/css/two.css" />
            </head>
            <body>
                <main>
                    <div class="content-wrapper">
                        <h1>Page Two</h1>
                        <p>This is the second page. It now follows the Paragraph design language with consistent colors and typography.</p>
                        <a href="/" class="back-link">← Back to Home</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default Two
