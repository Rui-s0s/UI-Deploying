import { FC } from 'hono/jsx'

const PlatformHome: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Paragraph - Modern Trades Platform</title>
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fm=webp&fit=crop&w=1200&q=60" fetchpriority="high" />
                <link rel="stylesheet" href="/css/two.css" />
            </head>
            <body>
                <main>
                    <section class="hero-section" tabindex={0}>
                        <h1 class="hero-title">Paragraph</h1>

                        <div class="hero-subtitle-box">
                            <p>Conecta con profesionales de oficios confiables, calificados por la comunidad.</p>
                        </div>
                    </section>

                    <section id="about" class="intro-section" tabindex={0}>
                        <div class="content-wrapper">
                            <h2>Sobre Nosotros</h2>
                            <p>Paragraph es la plataforma que conecta a usuarios con profesionales de oficios como electricistas, plomeros, albañiles y carpinteros, facilitando el acceso a servicios confiables y de calidad en un solo lugar. A través de una interfaz simple e intuitiva, puedes encontrar proveedores verificados, solicitar servicios según tus necesidades específicas, comparar opciones y revisar calificaciones reales basadas en experiencias de otros usuarios. Además, Paragraph promueve una comunidad activa donde las personas pueden compartir reseñas, recomendar profesionales y generar confianza a partir de la transparencia y la interacción. Ya sea para resolver una urgencia o planificar un proyecto a largo plazo, la plataforma te ayuda a tomar decisiones informadas, optimizar tu tiempo y conectar con quienes mejor se adaptan a lo que buscas.</p>
                        </div>
                    </section>

                    <article class="second-section-wrapper" tabindex={0}>
                        <div class="second-section">
                            <figure class="second-section-image">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fm=webp&fit=crop&w=800&q=50"
                                    alt="Profesional trabajando"
                                    loading="eager"
                                    decoding="async"
                                    fetchpriority="high"
                                />
                            </figure>
                            <div class="right-side-column">
                                <div class="right-box-container">
                                    <section class="main-content">
                                        Paragraph nace como respuesta a una problemática común: la dificultad de encontrar profesionales de oficios confiables, verificar sus capacidades reales y establecer contacto de manera rápida y segura. En muchos casos, las personas dependen de recomendaciones informales, contactos limitados o información poco clara, lo que genera incertidumbre, pérdida de tiempo y resultados poco satisfactorios. Al mismo tiempo, muchos trabajadores capacitados carecen de una forma efectiva de visibilizar su experiencia, demostrar la calidad de su trabajo y acceder a nuevas oportunidades.
                                    </section>
                                    <aside class="small-corner-box">
                                        Frente a esta situación, Paragraph propone una solución que conecta directamente a usuarios con proveedores de servicios, integrando herramientas que permiten evaluar, comparar y elegir con mayor confianza
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div class="top-services-wrapper" tabindex={0}>
                        <div class="content-wrapper">
                            <section id="top_services">
                                <a class="service-card" tabindex={0} href="/mk" style="text-decoration: none;">
                                    <div class="service-text">Mecanica</div>
                                    <div class="service-image">
                                        <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fm=webp&fit=crop&w=400&q=50" alt="Mechanic" loading="lazy" decoding="async" />
                                    </div>
                                </a>
                                <a class="service-card" tabindex={0} href="/plm" style="text-decoration: none;">
                                    <div class="service-text">Plomeria </div>
                                    <div class="service-image">
                                        <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fm=webp&fit=crop&w=400&q=50" alt="Plumbing" loading="lazy" decoding="async" />
                                    </div>
                                </a>
                                <a class="service-card" tabindex={0} href="/el" style="text-decoration: none;">
                                    <div class="service-text">Electricidad</div>
                                    <div class="service-image">
                                        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fm=webp&fit=crop&w=400&q=50" alt="Electrician" loading="lazy" decoding="async" />
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>

                    <div class="content-wrapper">
                        <a href="/" class="back-link">← Regresar al inicio</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners. © 2026 Paragraph</footer>
            </body>
        </html>
    )
}

export default PlatformHome
