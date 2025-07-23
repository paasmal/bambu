import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'
import ModuloContacto from '../componentes/ModuloContacto'
import Footer from '../componentes/Footer'

export default function ContactoPage(){
    return(
        <AppLayout>
            <Header />
            <section>
                <p>¿Tienes alguna duda? Escribenos</p>
                <div>
                    <ModuloContacto />
                </div>
            </section>
            <Footer />

            <style jsx>{`
                section{
                    padding: 50px 150px 60px 150px;
                }

                p{
                    font-size: 26px;
                    font-weight: 700;
                    margin-bottom: 30px;
                }

                div{
                    display: flex;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 16px 16px 16px 16px;
                    }

                    p{
                        font-size: 20px;
                        margin-bottom: 20px;
                    }

                    div{
                        flex-direction: column;
                    }
                }
            `}</style>
        </AppLayout>
    )
}