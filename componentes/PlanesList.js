import PlanViewer from './PlanViewer'

export default function PlanesList(){
    return(
        <>
            <article>
                <p className='name'>ESSENCIAL</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='600'
                            precio={[19, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 600 megas por siempre</p>
                        <p>• Incluye Router WiFi 6</p>
                        <p>• Hasta 100% descuento en la instalación</p>
                        <p>• Escoge tu promoción</p>
                    </div>
                </div>
            </article>
            <article>
                <p className='name'>PLUS</p>
                <div className='desing'>
                    <div className='plan'>
                        <PlanViewer
                            ancho='750'
                            precio={[23, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 750 megas por siempre</p>
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
                            ancho='900'
                            precio={[29, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p>• 900 megas por siempre</p>
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
                            ancho='1000'
                            precio={[42, 90]}
                        />
                    </div>
                    <div className='detalles'>
                        <p >• 1000 megas por siempre</p>
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
                    border-radius: 12px;
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
                }

                article:first-child{
                    margin-left: 0;
                }

                .desing{
                    padding: 22px 22px 22px 22px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .name{
                    background: #008F39;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
                    padding: 15px 0;
                    color: white;
                    font-size: 18px;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 11px 11px 0 0;
                }

                .detalles{
                    margin-top: 32px;
                    width: 100%;
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
                        border-radius: 12px;
                        margin-bottom: 22px;
                    }

                    .name{
                        padding: 10px 0;
                        font-size: 18px;
                    }

                    .desing{
                        padding: 20px 16px 22px 16px;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .plan{
                        width: 38%;
                        display: flex;
                        justify-content: center;
                    }

                    .detalles{
                        margin-top: 0;
                        width: calc(62% - 20px);
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