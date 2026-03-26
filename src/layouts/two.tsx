import { FC } from 'hono/jsx'

const Two: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Page Two</title>
                <link rel="stylesheet" href="/css/two.css" />
            </head>
            <body>
                <h1>Page Two</h1>
                <p>This is the second page.</p>
                <a href="/">Back to Home</a>
            </body>
        </html>
    )
}

export default Two
