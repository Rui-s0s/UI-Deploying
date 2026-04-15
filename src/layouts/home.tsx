import { FC } from 'hono/jsx'

const AsciiArt = () => (
    <figure>
        <pre>{`
                              .
                              |\\  /|
       (\\    _                ) )|/|
            (/             ---. /.'.'
     .-._________..      .' @ _\\  .'
     '.._______.   '.   /    (_| .')
        '._____.  /   '-/      | _.'
         '.______ (         ) ) \\
           '..____ '._       )  )
              .' __.--\\  , ,  // ((
              '.'  mrf|  \\/   (_.'(
                      '   \\ .'
                       \\   (
                        \\   '.
                         \\ \\ '.)
                          '-'-'
    `}</pre>
    </figure>
)

const MainLanding: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Paragraph JSX</title>
                <link rel="stylesheet" href="/css/home.css" />
            </head>
            <body>
                <header>
                    <h1>Paragraph</h1>
                </header>
                <main>
                    <div>
                        <AsciiArt />
                        <section>
                            <nav aria-label="Main Navigation">
                                <a href="/home">Home</a>
                                <a href="/faq">FAQ</a>
                                <a href="/mk">Mecanica</a>
                                <a href="/">Four</a>
                                <a href="/">Five</a>
                            </nav>
                        </section>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default MainLanding
