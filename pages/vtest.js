import AppLayout from '../componentes/AppLayout'
import Header from '../componentes/Header'
import Atras from '../componentes/icons/Atras'

export default function VTest(){
    return(
        <AppLayout>
            <Header />
            <div className='cont'>
                <div className='atras' onClick={() => router.back()}>
                    <Atras />
                </div>
                <div className='main'>
                    <p className='title'>Medidor de Velocidad</p>
                <div className='cont-medidor'>
                    <iframe 
                        src='//openspeedtest.com/speedtest'
                            style={{ 
                                border: 'none', 
                                position: 'absolute', 
                                top: '0', 
                                left: '0', 
                                width: '100%', 
                                height: '100%',
                                minHeight: '360px', 
                                border: 'none',
                                overflow: 'hidden'
                            }}  
                    ></iframe>
                </div>
                </div>
            </div>

            <style jsx>{`
                .cont{
                    margin: 25px 82px 50px 82px;
                    display: flex;
                    align-items: flex-start;
                }

                .atras{
                    margin-right: 18px;
                    padding: 1px 10px;
                    display: flex;
                    border-radius: 15px;
                    cursor: pointer;
                }

                .atras:hover{
                    background: #A7F0BA;
                }

                .main{
                    width: 100%;
                }

                .title{
                    position: relative;
                    font-size: 20px;
                    font-weight: 400;
                    z-index: 4;
                }

                .cont-medidor{
                    margin-top: 20px;
                    width: 100%;
                    height: 0;
                    padding-bottom: 45%;
                    position: relative;
                }

                @media screen and (max-width: 768px){
                }
            `}</style>
        </AppLayout>
    )
}