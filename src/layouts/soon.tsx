import { FC } from 'hono/jsx'

const ComingSoon: FC<{ pageTitle?: string }> = ({ pageTitle = "Coming Soon" }) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle}</title>
                <link rel="stylesheet" href="/css/soon.css" />
            </head>
            <body>
                <main>
                    <div class="coming-soon-container">

                        <div class="content-wrapper">
                            <h2>Coming Soon!</h2>
                            <p>We're working hard to bring you this service.</p>
                            <a href="/" class="back-link">← Regresar al inicio</a>
                        </div>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default ComingSoon