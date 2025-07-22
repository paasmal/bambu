import PlanViewer from './PlanViewer'

export default function PlanesList(){
    return(
        <>
            <article>
                <p className='name'>ESSENCIAL</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='300'
                            precio={[19, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 300 megas por siempre</p>
                        <p>• Incluye Router WiFi 6</p>
                        <p>• Hasta 100% descuento en la instalación</p>
                    </div>
                </div>
            </article>
            <article>
                <p className='name'>PLUS</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='450'
                            precio={[23, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 450 megas por siempre</p>
                        <p>• Incluye Router WiFi 6</p>
                        <p>• Hasta 100% descuento en la instalación</p>
                        <p>• Escoge tu promoción</p>
                    </div>
                </div>
            </article>
            <article>
                <p className='name'>PRIME</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='600'
                            precio={[29, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 600 megas por siempre</p>
                        <p>• Incluye 2 Routers WiFi 6</p>
                        <p>• Hasta 100% descuento en la instalación</p>
                        <p>• Escoge tu promoción</p>
                    </div>
                </div>
            </article>
            <article>
                <p className='name'>CONNECT</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='700'
                            precio={[42, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p >• 700 megas por siempre</p>
                        <p>• Incluye 2 Routers WiFi 6</p>
                        <p>• Hasta 100% descuento en la instalación</p>
                        <p>• Escoge tu promoción</p>
                    </div>
                </div>
            </article>

            <style jsx>{`
                article{
                    margin-left: 30px;
                    width: calc((100% - 90px)/ 4);
                    border: 1px solid #008F39;
                    border-radius: 12px;
                    padding-bottom: 25px;
                }

                article:first-child{
                    margin-left: 0;
                }

                .desing{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .name{
                    padding: 20px 0 25px 0;
                    color: #008F39;
                    font-size: 18px;
                    font-weight: 500;
                    text-align: center;
                }

                .detalles{
                    margin-top: 32px;
                    width: 100%;
                    padding: 0 25px;
                    color: #333;
                    font-size: 15px;
                    font-weight: 300;
                }

                .detalles p{
                    margin-bottom: 7px;
                }

                .detalles p:last-child{
                    margin-bottom: 0;
                }

                @media screen and (max-width: 768px){
                    article{
                        margin-left: 0;
                        width: 100%;
                        padding: 0 16px 25px 16px;
                        border: 1px solid #008F39;
                        border-radius: 12px;
                        margin-bottom: 22px;
                    }

                    .name{
                        padding: 18px 0 16px 0;
                        font-size: 18px;
                    }

                    .desing{
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .plan{
                        width: 38%;
                        display: flex;
                        justify-content: center;
                    }

                    .detalles{
                        width: calc(62% - 20px);
                        margin-top: 0;
                        padding: 0;
                        font-size: 14px;
                    }

                    .detalles p{
                        margin-bottom: 6px;
                    }
                }
            `}</style>
        </>
    )
}