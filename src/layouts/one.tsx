import { FC } from 'hono/jsx'

const FAQ: FC = () => {
    return (
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>FAQ - Paragraph</title>
                <link rel="stylesheet" href="/css/one.css" />
            </head>
            <body>
                <main>
                    <div class="faq-container">
                        <h1>Preguntas Frecuentes</h1>
                        <div class="faq-item" tabindex="0" onkeydown="if(event.key === 'Enter') this.querySelector('input').click()">
                            <input type="checkbox" id="faq1" class="faq-toggle" />
                            <label for="faq1" class="faq-question">
                                ¿Que signnifica cada link?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate facilis ducimus placeat vero, qui provident, ratione porro architecto dolor saepe reiciendis odit hic recusandae, suscipit commodi aut exercitationem nesciunt.</p>
                            </div>
                        </div>

                        <div class="faq-item" tabindex="0" onkeydown="if(event.key === 'Enter') this.querySelector('input').click()">
                            <input type="checkbox" id="faq2" class="faq-toggle" />
                            <label for="faq2" class="faq-question">
                                ¿Como se usa la pagina?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, neque voluptate. Labore accusantium, assumenda modi temporibus numquam ratione dignissimos aspernatur corporis earum animi harum! Culpa nihil perferendis reiciendis deleniti et.</p>
                            </div>
                        </div>

                        <div class="faq-item" tabindex="0" onkeydown="if(event.key === 'Enter') this.querySelector('input').click()">
                            <input type="checkbox" id="faq3" class="faq-toggle" />
                            <label for="faq3" class="faq-question">
                                ¿Como puedo validar las capacidades de las personas que pienso contactar?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi officiis, enim molestias eligendi vitae odio iure voluptatum quos eum sed suscipit natus animi debitis voluptatem obcaecati repellendus itaque at.</p>
                            </div>
                        </div>

                        <a href="/" class="back-link">← Regresar al inicio</a>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default FAQ
