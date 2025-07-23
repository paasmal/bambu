import { useRouter } from 'next/router'

import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'
import Contacto from '../componentes/Contacto'
import Footer from '../componentes/Footer'

export default function ContactoPage(){
    const router = useRouter()

    return(
        <AppLayout>
            <Header />
            <section>
                <p>¿Tienes alguna duda? Escribenos</p>
                <div>
                    <Contacto />
                </div>
            </section>
            <Footer />

            <style jsx>{`
                section{
                    padding: 50px 150px 60px 150px;
                }

                p{
                    color: #008F39;
                    font-size: 26px;
                    font-weight: 700;
                    margin-bottom: 30px;
                }

                div{
                    display: flex;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 16px 16px 40px 16px;
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