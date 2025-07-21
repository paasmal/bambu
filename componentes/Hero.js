import PlanViewer from './PlanViewer'

export default function Hero({ onScrollPlanes }){
    return(
        <section>
            <div className='hero'>
                <img className='principal' src='/hero.png' alt='Hero Bambu' />
                <svg viewBox="-75 -75 150 150" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#A7F0BA" d="M36.2,-35.2C48,-24.3,59.5,-12.2,59.3,-0.1C59.2,11.9,47.4,23.8,35.6,37C23.8,50.3,11.9,64.8,-5,69.8C-21.9,74.8,-43.7,70.2,-54.3,57C-64.9,43.7,-64.3,21.9,-63,1.3C-61.7,-19.3,-59.7,-38.5,-49.1,-49.4C-38.5,-60.3,-19.3,-62.8,-3.5,-59.3C12.2,-55.7,24.3,-46.1,36.2,-35.2Z" />
                </svg>
                <img className='ins-not' src='/instagram-not.png' />
                <img className='tiktok' src='/tiktok.png' />
                <img className='youtube' src='/youtube.png' />
                <img className='netflix' src='/netflix.png' />
                <img className='fb' src='/fb.png' />
                <img className='google' src='/google.png' />
            </div>
            <div className='plan'>
                <PlanViewer
                    ancho='300'
                    precio={[19, 90]}
                    main
                />
                <p className='veloz'>Navegación ultraveloz</p>
                <p className='otros' onClick={onScrollPlanes}>Conozca otros planes</p>
            </div>

            <style jsx>{`
                section{
                    position: relative;
                    width: 100%;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }

                .principal{
                    position: absolute;
                    bottom: 0;
                    right: 220px;
                    height: 450px;
                    z-index: 1;
                }

                svg{
                    position: absolute;
                    bottom: -10px;
                    right: -40px;
                    height: 530px;
                    width: 900px;
                }

                .ins-not{
                    position: absolute;
                    height: 56px;
                    right: 600px;
                    transform: rotate(-20deg);
                    z-index: 2;
                }

                .tiktok{
                    position: absolute;
                    height: 60px;
                    right: 200px;
                    transform: rotate(20deg);
                    z-index: 2;
                }

                .youtube{
                    position: absolute;
                    bottom: 320px;
                    right: 220px;
                    height: 45px;
                    transform: rotate(10deg);
                    z-index: 2;
                }

                .netflix{
                    position: absolute;
                    bottom: 305px;
                    right: 610px;
                    height: 50px;
                    transform: rotate(-5deg);
                    z-index: 2;
                }

                .fb{
                    position: absolute;
                    bottom: 400px;
                    right: 560px;
                    height: 55px;
                    transform: rotate(-10deg);
                    z-index: 2;
                }

                .google{
                    position: absolute;
                    bottom: 400px;
                    right: 310px;
                    height: 60px;
                    transform: rotate(10deg);
                    z-index: 2;
                }

                .plan{
                    margin-left: 220px;
                }

                .veloz{
                    margin-top: 18px;
                    width: 180px;
                    padding: 2px 5px;
                    color: #008F39;
                    font-size: 15px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid #008F39;
                    border-radius: 8px;
                }

                .otros{
                    margin-top: 10px;
                    background: #008F39;
                    width: 200px;
                    padding: 8px 5px;
                    color: white;
                    font-size: 17px;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .otros:hover{
                    background: black;
                    transition: 0.5s ease;
                }

                @media screen and (max-width: 640px){
                    section{
                        width: 100%;
                        height: 240px;
                    }

                    .principal{
                        bottom: 0;
                        right: 10px;
                        height: 200px;
                    }

                    svg{
                        bottom: -5px;
                        right: -25px;
                        height: 250px;
                        width: 240px;
                    }

                    .ins-not{
                        height: 25px;
                        right: 182px;
                        bottom: 84px;
                    }

                    .tiktok{
                        bottom: 85px;
                        height: 27px;
                        right: 0px;
                    }

                    .youtube{
                        bottom: 150px;
                        right: 10px;
                        height: 20px;
                    }

                    .netflix{
                        bottom: 135px;
                        right: 185px;
                        height: 25px;
                    }

                    .fb{
                        bottom: 185px;
                        right: 155px;
                        height: 30px;
                    }

                    .google{
                        bottom: 185px;
                        right: 50px;
                        height: 35px;
                    }

                    .plan{
                        margin-left: 20px;
                    }

                    .veloz{
                        margin-top: 15px;
                        width: 116px;
                        padding: 2px 4px;
                        font-size: 11px;
                        letter-spacing: -0.5px;
                        border-radius: 8px;
                    }

                    .otros{
                        margin-top: 8px;
                        width: 116px;
                        padding: 6px 4px;
                        font-size: 11px;
                        letter-spacing: -0.5px;
                        border-radius: 2px;
                    }
                }
            `}</style>
        </section>
    )
}