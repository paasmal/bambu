import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../services/authContext'

import AppLayout from '../componentes/AppLayout'
import PrivateRoute from '../services/privateRoute'
import Modal from '../componentes/Modal'

import { db, auth } from '../services/dbase'
import { signOut, updatePassword } from 'firebase/auth'
import { doc, setDoc, Timestamp, onSnapshot, collection, getDocs } from 'firebase/firestore'

export default function User(){
    const router = useRouter()
    const { user } = useContext(AuthContext)
    const [abrir, setAbrir] = useState(false)
    const [marcado, setMarcado] = useState(false)

    useEffect(() => {
        if(user){
            var hoy = new Date()
            var dia = hoy.getDate()
            var mes = hoy.getMonth()+1
            var ano = hoy.getFullYear()

            const unsub = onSnapshot(doc(db, user.email, `${ano}${mes < 10 ? `0${mes}` : mes}${dia}`), (doc) => {
                if(doc.data()) setMarcado(doc.data())
                else setMarcado(false)
            })
        }
    }, [user])

    const handleSalir = () => signOut(auth)

    const handleCambiar = e => {
        e.preventDefault()
        const { password } = e.target.elements
        const user = auth.currentUser
        
        updatePassword(user, password.value).then(() => {
            console.log('Cambiado')
            setAbrir(false)
        }).catch((error) => {
            console.log('error cambiando')
        })
    }

    const handleMarcar = e => {
        e.preventDefault()

        var hoy = new Date()
        var hora = hoy.getHours() < 10 ? `0${hoy.getHours()}` : hoy.getHours()
        var min = hoy.getMinutes() < 10 ? `0${hoy.getMinutes()}` : hoy.getMinutes()
        var dia = hoy.getDate()
        var mes = hoy.getMonth()+1
        var ano = hoy.getFullYear()
    
        const docRef = setDoc(doc(db, user.email, `${ano}${mes < 10 ? `0${mes}` : mes}${dia}`), {
            user: user.email,
            fecha: Timestamp.fromDate(new Date()),
            fechaId: `${ano}${mes < 10 ? `0${mes}` : mes}${dia}`,
            dia: +dia,
            mes: +mes,
            ano: +ano,
            hora: +hora,
            minuto: +min,
            tiempo: `${hora}:${min}`
        })
        localStorage.setItem('yamarco', true);
    }

    return(
        <PrivateRoute type='private'>
            <AppLayout>
                <div className='container'>
                    <div className='menu'>
                        <p className='nombre'>{user && user.displayName.toUpperCase()}</p>
                        <p className='boton' onClick={() => router.push('/detalle')}>Detalle de ingresos</p>
                        <p className='boton' onClick={handleSalir}>Cerrar Sesión</p>
                        <p className='boton' onClick={() => setAbrir(true)}>Cambiar Contraseña</p>
                    </div>
                    {
                        marcado ? 
                            <div className='card-marcado'>
                                <p className='texto'>Hora de ingreso</p>
                                <p className='hora'>{marcado.tiempo}</p>
                            </div>
                        : <p className='marcar' onClick={handleMarcar}>Marcar Ingreso</p>
                    }
                    
                </div>
                {
                    abrir &&
                    <Modal onCerrar={() => setAbrir(false)}>
                        <form onSubmit={handleCambiar}>
                            <input name='password' type='text' placeholder='Nueva Contraseña' required />
                            <button>Cambiar</button>
                        </form>
                    </Modal>
                }

                <style jsx>{`
                    .container{
                        position: relative;
                        width: 100%;
                        height: calc(100vh - 70px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .menu{
                        position: absolute;
                        top: 20px;
                        right: 25px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }

                    .nombre{
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .boton{
                        margin-top: 8px;
                        border: 1px solid #999;
                        padding: 3px 8px 4px 8px;
                        color: #999;
                        font-size: 14px;
                        font-weight: 400;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: 0.5s ease;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                    }

                    .boton:hover{
                        color: white;
                        background: tomato;
                        border: 1px solid tomato;
                    }

                    .marcar{
                        background: tomato;
                        padding: 15px 25px;
                        color: white;
                        font-size: 18px;
                        font-weight: bold;
                        letter-spacing: 1px;
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    input{
                        height: 35px;
                        width: 70%;
                        font-size: 22px;
                        text-align: center;
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

                    .card-marcado{
                        text-align: center;
                    }

                    .texto{
                        font-size: 19px;
                        margin-bottom: 10px;
                    }

                    .hora{
                        color: tomato;
                        font-size: 22px;
                        font-weight: bold;
                    }
                `}</style>
            </AppLayout>
        </PrivateRoute>
    )
}