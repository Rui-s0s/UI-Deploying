import { FC } from 'hono/jsx'

const Two: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Paragraph - Home</title>
                <link rel="stylesheet" href="/css/two.css" />
            </head>
            <body>
                <main>
                    <div class="content-wrapper">
                        <h1>Paragraph</h1>
                        <p>Welcome to the new Paragraph.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod animi asperiores laudantium doloremque molestiae consequuntur hic voluptatibus, maxime nesciunt eaque ea eius, vel dolor. Accusamus atque rem blanditiis quibusdam!
                        </p>
                    </div>

                    <section id="about" class="content-wrapper">
                        <h2>Sobre Nosotros</h2>
                        <p>Paragraph es el sitio clave para conectarte con cualquier proveedor de servicios y acercarte a la comunidad.</p>
                    </section>

                    <div class="second-section">
                        <div class="title1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium in quia minima voluptatem aliquid autem
                        </div>

                        <div class="right-side-column">
                            <div class="right-box">Top Right Item</div>
                            <div class="right-box">Bottom Right Item</div>
                        </div>
                    </div>

                    <section id="top_services">
                        <ul>A</ul>
                        <ul>B</ul>
                        <ul>C</ul>
                        <ul>D</ul>
                    </section>

                    <a href="/" class="back-link">← Back to Home</a>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default Two
