import { FC } from 'hono/jsx'

const One: FC = () => {
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
                                ¿Que signgnifica cada link?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Cada link es una abreviatura para el problema que busca solucionar, /mk/ mecanica, /pnt/ pintura, /pl/ plomeria y asi sucesivamente, una descripcion mas detallada se encuentra en cada pagina</p>
                            </div>
                        </div>

                        <div class="faq-item" tabindex="0" onkeydown="if(event.key === 'Enter') this.querySelector('input').click()">
                            <input type="checkbox" id="faq2" class="faq-toggle" />
                            <label for="faq2" class="faq-question">
                                ¿Como se usa la pagina?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Los usuarios pueden tanto hacer peticiones para algun servicio o publicitar algun servicio que ofrecen, cada uno en su respectiva pagina para seguir las normas y en dicho post uno puede comentar para ofrecer ayuda o para pedir los servicios de otros</p>
                            </div>
                        </div>

                        <div class="faq-item" tabindex="0" onkeydown="if(event.key === 'Enter') this.querySelector('input').click()">
                            <input type="checkbox" id="faq3" class="faq-toggle" />
                            <label for="faq3" class="faq-question">
                                ¿Como puedo validar las capacidades de las personas que pienso contactar?
                                <span class="icon"></span>
                            </label>
                            <div class="faq-answer">
                                <p>Es un servicio que funciona completamente por la confianza de los usuarios, uno hace un buen trabajo y queda registrado el buen rendimiento que tuvo o una mala reseña si es que no fue el caso, nosotros como Paragraph nos encargamos de validar la autenticidad de las personas pero queda en manos de la comunidad verificar el rendimiento de cada uno. En caso que haya quejas por algún usuario de la plataforma tomaremos las medidas necesarias para soluionar el problema</p>
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

export default One
