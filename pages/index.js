import { useState } from 'react'

import { auth } from '../services/dbase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AppLayout from '../componentes/AppLayout'
import PrivateRoute from '../services/privateRoute'
import Modal from '../componentes/Modal'

export default function Home() {
  const [abrir, setAbrir] = useState(false)
  const [mal, setMal] = useState(false)

  const handleCerrar = e => {
    setMal(false)
    setAbrir(false)
  }

  const handleLogin = async e => {
    e.preventDefault()
    const { usuario, password } = e.target.elements

    signInWithEmailAndPassword(auth, `${usuario.value.toLoweCase()}@bambu.ec`, password.value)
      .then((userCredential) => {
        console.log('Ingreso')
      })
      .catch((error) => {
        const errorCode = error.code
        if(errorCode == 'auth/wrong-password') setMal('Contraseña Incorrecta')
        else if(errorCode == 'auth/user-not-found') setMal('Usuario Incorrecto')
        else setMal(false)
      })
  }

  return (
    <PrivateRoute type='sesion'>
      <AppLayout>
        <div>
          <p className='ingreso' onClick={() => setAbrir(true)}>Ingreso</p>
        </div>
        {
          abrir && 
          <Modal onCerrar={handleCerrar}>
            <form onSubmit={handleLogin}>
              <input name='usuario' type='text' placeholder='Usuario' required autoComplete='off' />
              <input name='password' type='password' placeholder='Contraseña' required />
              { mal && <p className='incorrecto'>{mal}</p> }
              <button>Iniciar</button>
            </form>
          </Modal>
        }
        
        <style jsx>{`
          div{
            position: relative;
            width: 100%;
            height: calc(100vh - 70px);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ingreso{
            position: absolute;
            background: black;
            top: 20px;
            right: 25px;
            margin: 0;
            padding: 6px 12px 7px 12px;
            color: white;
            font-weight: 400;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.5s ease;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }

          .ingreso:hover{
            background: tomato;
          }

          form{
            margin-top: 20px;
          }

          input{
            height: 35px;
            width: 70%;
            font-size: 22px;
            border: none;
            outline:none;
            cursor: pointer;
            border-bottom: 1px solid #AAA;
            margin-bottom: 25px;
          }

          button{
            margin-top: 20px;
            background: tomato;
            padding: 15px 50px;
            color: white;
            font-size: 19px;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
            border: none;
            outline:none;
            cursor: pointer;
          }

          .incorrecto{
            color: red;
          }

          @media screen and (max-width: 768px){
            .container{
              flex-direction: column;
            }

            .izquierda{
              width: 100%;
            }

            section{
              width: 90%;
            }
          }
        `}</style>
      </AppLayout>
    </PrivateRoute>
  )
}
