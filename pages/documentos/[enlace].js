import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/AppLayout'
import Header from '../../componentes/Header'
import Atras from '../../componentes/icons/Atras'
import Footer from '../../componentes/Footer'

import { Worker, Viewer, ProgressBar } from '@react-pdf-viewer/core'

import '@react-pdf-viewer/core/lib/styles/index.css'

/* const CustomPageLayer = ({ renderPageProps }) => {
    useEffect(() => {
        if (renderPageProps.canvasLayerRendered) {
        renderPageProps.markRendered(renderPageProps.pageIndex)
        }
    }, [renderPageProps.canvasLayerRendered])

    return (
        <>
            {renderPageProps.canvasLayer.children}
            {renderPageProps.annotationLayer.children}
        </>
    )
} */

export default function Documento(){
    const router = useRouter()
    const { enlace } = router.query
    const [name, SetName] = useState('')

    /* const renderPage = props => <CustomPageLayer renderPageProps={props} /> */

    useEffect(() => {
        if(enlace == 'calidad-internet') SetName('Parametros de calidad de internet')
        if(enlace == 'adulto-mayor') SetName('Resolución Arcotel-2021-1024 / Adulto mayor')
        if(enlace == 'resolucion-arcotel') SetName('Resolución Arcotel 2022-0123')
        if(enlace == 'resolucion-parental') SetName('Resolución guia control parental')
        if(enlace == 'guia-parental') SetName('Recomendaciones para configuración del control parental')
        if(enlace == 'senadi') SetName('Disposiciones SENADI')
        if(enlace == 'seguridad-informatica') SetName('Guia de seguridad informática UNODC')
   
    }, [enlace])

    return(
        <AppLayout>
            <Header />
            <div className='cont'>
                <div className='cont-title'>
                    <div className='atras' onClick={() => router.back()}>
                        <Atras />
                    </div>
                    <p className='title'>{name ? name : ''}</p>
                </div>
                <div className='main'>
                    {
                        enlace && 
                        <div className='cont-pdf'>
                            <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
                                <Viewer
                                    fileUrl={`/${enlace}.pdf`}
                                    renderLoader={percentages => (
                                        <div style={{
                                            margin: '100px 0',
                                            width: '240px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}>
                                            <img 
                                                src='/logo.jpg' alt='Bambu Logo'
                                                style={{ width: '100px' }}
                                            />
                                            <p style={{ margin: '20px 0', fontSize: '18px' }}>Cargando...</p>
                                            <ProgressBar progress={Math.round(percentages)} />
                                        </div>
                                    )}
                                />
                            </Worker>
                        </div>
                    }
                </div>
            </div>
            <Footer />

            <style jsx>{`
                .cont{
                    margin: 25px 82px 50px 82px;
                }

                .cont-title{
                    display: flex;
                    align-items: flex-start;
                }

                .atras{
                    margin-right: 20px;
                    padding: 1px 10px;
                    display: flex;
                    border-radius: 15px;
                    cursor: pointer;
                }

                .atras:hover{
                    background: #A7F0BA;
                }

                .title{
                    position: relative;
                    font-size: 20px;
                    font-weight: 400;
                }

                .main{
                    width: 100%;
                }

                .cont-pdf{
                    margin-top: 25px;
                    width: 100%;
                }

                @media screen and (max-width: 768px){
                    .cont{
                        margin: 20px 15px 40px 15px;
                    }

                    .atras{
                        margin-right: 10px;
                        padding: 0;
                        border-radius: 0;
                    }

                    .atras:hover{
                        background: white;
                    }

                    .title{
                        font-size: 18px;
                    }

                    .main{
                        width: calc(100vw - 30px);
                    }

                    .cont-pdf{
                        margin-top: 25px;
                        width: 100%;
                    }
                }
            `}</style>
        </AppLayout>
    )
}