import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'
import Atras from '../componentes/icons/Atras'
import GraficoTrafico from '../componentes/GraficoTrafico'
import Footer from '../componentes/Footer'

export default function Trafico(){

    return(
        <AppLayout>
            <Header />
            <section>
                <div className='cont-title'>
                    <div className='atras' onClick={() => router.back()}>
                        <Atras />
                    </div>
                    <p className='title'>Capacidad Internacional</p>
                </div>
                <div className='main'>
                    <GraficoTrafico />
                </div>
            </section>
            <Footer />

            <style jsx>{`
                section{
                    margin: 25px 80px 50px 80px;
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
                    margin-top: 30px;
                    width: 100%;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 30px 16px 20px 16px;
                    }

                    p{
                        font-size: 19px;
                        font-weight: 700
                    }

                    .cont-planes{
                        margin-top: 20px;
                        flex-direction: column;
                    }
                }
            `}</style>
        </AppLayout>
    )
}