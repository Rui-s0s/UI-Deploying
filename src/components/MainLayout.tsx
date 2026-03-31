// src/layouts/MainLayout.tsx
export const MainLayout = (props: { title: string, children: any }) => (
    <html lang="en">
        <head>
            <title>{props.title} / Twitter Clone</title>
            <link rel="stylesheet" href="/static/style.css" />
        </head>
        <body style={{ backgroundColor: '#f7f9f9', margin: 0, fontFamily: 'sans-serif' }}>
            <nav style={{ background: '#fff', padding: '10px', borderBottom: '1px solid #e1e8ed', sticky: 'top' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', fontWeight: 'bold' }}>Home</div>
            </nav>
            <main style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', minHeight: '100vh' }}>
                {props.children}
            </main>
        </body>
    </html>
);