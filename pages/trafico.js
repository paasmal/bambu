import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'

export default function Trafico(){
    return(
        <AppLayout>
            <Header />
            <section>
                <iframe src="http://131.161.221.23:3333/d-solo/f26e2576-0f9e-4a82-aad7-2b658eb11a49/olt-machangara?orgId=1&refresh=30s&from=1753280511310&to=1753302111310&theme=light&panelId=3" width="450" height="200" frameborder="0"></iframe>
            </section>

            <style jsx>{`
                section{
                    padding: 70px 150px 80px 150px;
                }

                .title{
                    font-size: 26px;
                    font-weight: 700;
                }

                .cont-planes{
                    margin-top: 35px;
                    display: flex;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 30px 16px 20px 16px;
                    }

                    .title{
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