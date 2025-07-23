import Contacto from './Contacto'

export default function ContContacto({ reference }){

    return(
        <section ref={reference}>
            <div className='top-bar'></div>
            <div className='contacto'>
                <p className='title'>Contactanos</p>
                <p className='subtitle'>¿Tienes alguna consulta? Escribenos</p>
                <Contacto />
            </div>
            <div className='bottom-bar'></div>

            <style jsx>{`
                .top-bar{
                    background: #A7F0BA;
                    background: #008F39;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
                    width: 60%;
                    height: 6px;
                }
                
                .contacto{
                    padding: 50px 150px 55px 150px;
                }

                .title{
                    color: #008F39;
                    font-size: 26px;
                    font-weight: 700;
                }

                .subtitle{
                    margin-top: 5px;
                    color: black;
                    font-size: 18px;
                    font-weight: 300;
                    margin-bottom: 25px;
                }

                .bottom-bar{
                    background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
                    background: #A7F0BA;
                    margin-left: 40%;
                    width: 60%;
                    height: 5px;
                }

                @media screen and (max-width: 768px){
                    .contacto{
                        margin-top: 0px;
                        padding: 35px 20px 40px 20px;
                    }

                    .title{
                        font-size: 19px;
                    }

                    .subtitle{
                        margin-top: 6px;
                        font-size: 15px;
                        margin-bottom: 25px;
                    }

                    .bottom-bar{
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}