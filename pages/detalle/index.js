import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../services/authContext'

import AppLayout from '../../componentes/AppLayout'
import PrivateRoute from '../../services/privateRoute'

export default function Detalle(){
    const router = useRouter()
    const { user } = useContext(AuthContext)

    return(
        <PrivateRoute type='private'>
            <AppLayout>
                <div className='container'>
                    <div className='menu'>
                        <p className='nombre'>DETALLE DE INGRESOS</p>
                        <p className='boton' onClick={() => router.back()}>Atras</p>
                    </div>
                    <div className='con-nombres'>
                        <p onClick={() => router.push('/detalle/lcabrera')}>Luciano Cabrera</p>
                        <p onClick={() => router.push('/detalle/jzuniga')}>Jonnathan Zuñiga</p>
                        <p onClick={() => router.push('/detalle/pabad')}>Paola Abad</p>
                        <p onClick={() => router.push('/detalle/pasmal')}>Pedro Asmal Arias</p>
                    </div>
                </div>

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

                    .boton:hover, .con-nombres p:hover{
                        color: white;
                        background: tomato;
                        border: 1px solid tomato;
                    }

                    .con-nombres{
                        
                    }

                    .con-nombres p{
                        margin-top: 10px;
                        padding: 4px 10px 5px 10px;
                        border: 1px solid #999;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: 0.5s ease;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                    }
                `}</style>
            </AppLayout>
        </PrivateRoute>
    )
}