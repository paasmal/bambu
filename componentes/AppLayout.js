import { useState, useEffect } from 'react'

import Head from 'next/head'
import Header from './Header'

export default function AppLayout({ pagina, children }) {
    const [Ipp, setIpp] = useState(null)

    useEffect(() => {
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(result => setIpp(result.ip))   
    }, [])

    return(
        <>
            <Head>
                <title>Bambú Network</title>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content='#FFF'></meta>
                <link rel='icon' href='/logoSoloPanda.jpg' />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                <Header />
                <div>
                    {
                        (Ipp == '131.161.221.99' || Ipp == '131.161.221.98') ? children
                        : <p>Conectese a la red de la empresa para poder acceder a esta página.</p>
                    }
                </div>
            </main>
            
            <style jsx global>{`
                html,
                body {
                    overflow-y: visible;
                    padding: 0;
                    margin: 0;
                    font-family: 'Lato', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
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