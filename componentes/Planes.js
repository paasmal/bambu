import PlanViewer from './PlanViewer'

export default function Planes({ reference }){
    return(
        <section ref={reference}>
            <p className='title'>Elige tu plan:</p>
            <div className='cont-planes'>
                <article>
                    <p className='name'>ESSENCIAL</p>
                    <PlanViewer
                        ancho='300'
                        precio={[19, 90]}
                    />
                    <p className='salto det'>• 300 megas por siempre</p>
                    <p className='det'>• Incluye Router WiFi 6</p>
                    <p className='det'>• Hasta 100% descuento en la instalación</p>
                </article>
                <article>
                    <p className='name'>PLUS</p>
                    <PlanViewer
                        ancho='450'
                        precio={[23, 90]}
                    />
                    <p className='salto det'>• 450 megas por siempre</p>
                    <p className='det'>• Incluye Router WiFi 6</p>
                    <p className='det'>• Hasta 100% descuento en la instalación</p>
                    <p className='det'>• Escoge tu promoción</p>
                </article>
                <article>
                    <p className='name'>PRIME</p>
                    <PlanViewer
                        ancho='600'
                        precio={[29, 90]}
                    />
                    <p className='salto det'>• 600 megas por siempre</p>
                    <p className='det'>• Incluye 2 Routers WiFi 6</p>
                    <p className='det'>• Hasta 100% descuento en la instalación</p>
                    <p className='det'>• Escoge tu promoción</p>
                </article>
                <article>
                    <p className='name'>CONNECT</p>
                    <PlanViewer
                        ancho='700'
                        precio={[42, 90]}
                    />
                    <p className='salto det'>• 700 megas por siempre</p>
                    <p className='det'>• Incluye 2 Routers WiFi 6</p>
                    <p className='det'>• Hasta 100% descuento en la instalación</p>
                    <p className='det'>• Escoge tu promoción</p>
                </article>
            </div>
            

            <style jsx>{`
                section{
                    padding: 50px 150px 60px 150px;
                }

                .title{
                    font-size: 26px;
                    font-weight: 700;
                }

                .cont-planes{
                    margin-top: 30px;
                    display: flex;
                }

                article{
                    margin-left: 30px;
                    width: calc((100% - 90px)/ 4);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #008F39;
                    border-radius: 12px;
                    padding-bottom: 25px;
                }

                article:first-child{
                    margin-left: 0;
                }

                .name{
                    padding: 20px 0 25px 0;
                    color: #008F39;
                    font-size: 18px;
                    font-weight: 500;
                }

                .salto{
                    margin-top: 32px;
                }

                .det{
                    width: 100%;
                    padding: 0 25px;
                    color: #333;
                    font-size: 15px;
                    font-weight: 300;
                    margin-bottom: 7px;
                }

                @media screen and (max-width: 768px){
                }
            `}</style>
        </section>
    )
}