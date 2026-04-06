import { FC } from 'hono/jsx'
import { ParagraphPostCard } from '../components/PostCard'
import { hardcodedPosts } from '../models/posts'

const Two: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Paragraph - Modern Trades Platform</title>
                <link rel="stylesheet" href="/css/two.css" />
            </head>
            <body>
                <main>
                    <section class="hero-section">
                        <div class="hero-title-wrapper">
                            <h1 class="hero-title">Paragraph</h1>
                        </div>
                        <div class="hero-subtitle-box">
                            <p>Conectando los mejores oficios con quienes más los necesitan.</p>
                        </div>
                    </section>

                    <section id="about" class="intro-section">
                        <div class="content-wrapper">
                            <h2>Sobre Nosotros</h2>
                            <p>Paragraph es el sitio clave para conectarte con cualquier proveedor de servicios y acercarte a la comunidad. Desde plomería hasta mecánica especializada.</p>
                        </div>
                    </section>

                    <div class="second-section-wrapper">
                        <div class="content-wrapper">
                            <div class="second-section">
                                <div class="title1">
                                    <div class="title1-overlay">
                                        "La excelencia en el oficio es la base de una comunidad fuerte y funcional. Encuentra expertos verificados aquí."
                                    </div>
                                </div>

                                <div class="right-side-column">
                                    <div class="right-box">Mecánica Certificada</div>
                                    <div class="right-box">Plomería 24/7</div>
                                    <div class="right-box">Electricistas de Confianza</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="featured-posts-wrapper">
                        <div class="content-wrapper">
                            <section id="featured_posts">
                                <h2>Últimos Reportes</h2>
                                <div class="posts-feed">
                                    {hardcodedPosts.map(post => (
                                        <ParagraphPostCard post={post} />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="top-services-wrapper">
                        <div class="content-wrapper">
                            <section id="top_services">
                                <div class="service-card">PNT</div>
                                <div class="service-card">MK</div>
                                <div class="service-card">PL</div>
                                <div class="service-card">ELC</div>
                            </section>
                        </div>
                    </div>

                    <div class="content-wrapper" style="text-align: center;">
                        <a href="/" class="back-link">← Regresar al inicio</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners. © 2026 Paragraph</footer>
            </body>
        </html>
    )
}

export default Two
