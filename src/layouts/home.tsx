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

const Home: FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Paragraph JSX</title>
                <link rel="stylesheet" href="/public/css/home.css" />
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
                                <a href="/one">/one/</a>
                                <a href="/two">/two/</a>
                                <a href="/three">/three/</a>
                            </nav>
                        </section>
                    </div>
                </main>
                <footer>All archives belong to their respective owners.</footer>
            </body>
        </html>
    )
}

export default Home
