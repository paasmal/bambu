export default function PlanViewer({ ancho, precio, main }){
    return(
        <article>
            <p className='band'>{ancho}</p>
            <div className='cont-price'>
                <p className='pm'>MEGAS</p>
                <div className='price'>
                    <p className='high'>{precio[0]}</p>
                    <div>
                        <p className='ctvs'>,{precio[1]}</p>
                        <p className='imp'>+imp</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .band{
                    color: #008F39;
                    font-size: ${main ? '150px' : '105px'};
                    font-weight: 700;
                    letter-spacing: -5px;
                    line-height: 75%;
                }

                .cont-price{
                    margin-top: 15px;
                    display: flex;
                    align-items: flex-start;
                }

                .pm{
                    background: black;
                    padding: ${main ? '4px 10px' : '4px 8px'};
                    color: white;
                    font-size: ${main ? '16px' : '14px'};
                    border-radius: 8px;
                }

                .price{
                    margin-left: 5px;
                    color: #008F39;
                    display: flex;
                }

                .high{
                    margin-top: -4px;
                    font-size: ${main ? '70px' : '55px'};
                    font-weight: 700;
                    line-height: 75%;
                    letter-spacing: -4px;
                }

                .ctvs{
                    margin-left: 5px;
                    font-size: ${main ? '20px' : '18px'};
                    font-weight: 700;
                    line-height: 75%;
                }

                .imp{
                    margin-left: 5px;
                    font-size: ${main ? '16px' : '15px'};
                }

                @media screen and (max-width: 768px){
                }
            `}</style>
        </article>
    )
}