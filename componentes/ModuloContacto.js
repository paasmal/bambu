import emailjs from '@emailjs/browser'

export default function ModuloContacto({ reference }){

    const sendEmail = e => {
        e.preventDefault()

        var templateParams = {
            user_name: e.target.nombre.value,
            user_email: e.target.email.value,
            user_message: e.target.mensaje.value
        }

        emailjs.send('service_yatksni','template_p45d4w3', templateParams,'MLNbA22-_mmHN5Aei')
            .then(response => {
                if(response.status == 200) console.log('enviado')
            }).catch(error => console.log(error))
    }

    return(
        <section ref={reference}>
            <div className='top-bar'></div>
            <div className='contacto'>
                <p className='title'>Contactanos</p>
                <p className='subtitle'>¿Tienes alguna consulta? Escribenos</p>
                <form onSubmit={sendEmail} >
                    <div className='datos'>
                        <label>Nombre:</label>
                        <input type='text' name='nombre' required />
                    </div>
                    <div className='datos'>
                        <label>Correo:</label>
                        <input type='email' name='email' required />
                    </div>
                    <div className='datos'>
                        <label>Mensaje:</label>
                        <textarea 
                            name='mensaje'
                            id='Message'
                            /* onKeyPress={handleKeyPress} */
                            cols='30'
                            rows='9'
                            required
                        ></textarea>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
            <div className='bottom-bar'></div>

            <style jsx>{`
                .top-bar{
                    background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
                    background: #A7F0BA;
                    width: 60%;
                    height: 5px;
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
                }

                form{
                    position: relative;
                    margin-top: 25px;
                }

                .datos{
                    font-size: 17px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;
                }

                label{
                    color: black;
                    font-size: 17px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }

                input, textarea{
                    background: #FFF;
                    padding: 6px 7px;
                    font-size: inherit;
                    font-family: inherit;
                    border: 1px solid #CCC;
                    border-radius: 4px;
                    outline: none;
                }

                button{
                    background: black;
                    margin-top: 10px;
                    margin: 5px 0 0 calc(100% - 150px);
                    width: 150px;
                    padding: 10px 20px;
                    color: white;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 8px;
                    border: none;
                    outline: none;
                    cursor: pointer;
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
                    }

                    form{
                        margin-top: 25px;
                    }

                    .datos{
                        font-size: 16px;
                        margin-bottom: 15px;
                    }

                    label{
                        color: black;
                        font-size: 16px;
                        margin-bottom: 8px;
                    }

                    input, textarea{
                        background: #F9F9F9;
                        padding: 6px 7px;
                        border: 1px solid #BBB;
                        border-radius: 2px;
                    }

                    button{
                        position: relative;
                        margin: 5px 0 0 calc(100% - 110px);
                        width: 110px;
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </section>
    )
}