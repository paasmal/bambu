import emailjs from '@emailjs/browser'

export default function Contacto(){

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

            <style jsx>{`
                form{
                    width: 100%;
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
                    background: #F9F9F9;
                    padding: 6px 7px;
                    font-size: inherit;
                    font-family: inherit;
                    border: 1px solid #BBB;
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

                @media screen and (max-width: 768px){
                    .datos{
                        font-size: 16px;
                    }

                    label{
                        font-size: 16px;
                    }

                    input, textarea{
                        border-radius: 2px;
                    }

                    button{
                        margin: 5px 0 0 calc(100% - 110px);
                        width: 110px;
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </form>
    )
}