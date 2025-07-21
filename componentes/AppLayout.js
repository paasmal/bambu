import Head from 'next/head'

export default function AppLayout({ pagina, children }) {

    return(
        <>
            <Head>
                <title>Bambú Network</title>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='theme-color' content='#FFF'></meta>
                <link rel='icon' href='/logoSoloPanda.jpg' />
                <link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap' rel='stylesheet'></link>
            </Head>

            <main>
                {children}
            </main>

            <style jsx>{`
                main{
                    overflow-x: hidden;
                }
            `}</style>
            
            <style jsx global>{`
                html,
                body {
                    overflow-y: visible;
                    padding: 0;
                    margin: 0;
                    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }
                
                a{
                    color: inherit;
                    text-decoration: none;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                }
                
                * {
                    box-sizing: border-box;
                }

                h1, h2, h3, h4, p, div{
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    )
}