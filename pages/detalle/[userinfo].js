import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../services/authContext'

import AppLayout from '../../componentes/AppLayout'
import PrivateRoute from '../../services/privateRoute'

import { db } from '../../services/dbase'
import { collection, getDocs } from 'firebase/firestore'

const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
]


export default function UserInfo({ ingresos }){
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
                        {
                            ingresos.map(ingreso =>
                                <div>
                                    <p className='fecha'>
                                        {`${ingreso.dia < 10 ? `0${ingreso.dia}` : ingreso.dia} /
                                        ${ingreso.mes < 10 ? `0${ingreso.mes}` : ingreso.mes} / ${ingreso.ano}`}
                                    </p>
                                    <p className='hora'>{ingreso.tiempo}</p>
                                </div>
                            )
                        }
                    </div>
                </div>

                <style jsx>{`
                    .container{
                        position: relative;
                        width: 100%;
                        height: calc(100vh - 70px);
                        display: flex;
                        justify-content: center;
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

                    .con-nombres{
                        margin-top: 80px;
                    }

                    .con-nombres div{
                        margin-top: 10px;
                        padding: 4px 10px 5px 10px;
                        display: flex;
                        border: 1px solid #999;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: 0.5s ease;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                    }

                    .hora{
                        margin-left: 30px;
                    }
                `}</style>
            </AppLayout>
        </PrivateRoute>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { userinfo } = params

    const querySnapshot = await getDocs(collection(db, `${userinfo}@bambu.ec`))

    const ingresos = []
    querySnapshot.forEach(ingreso => ingresos.push({
        dia: ingreso.data().dia,
        mes: ingreso.data().mes,
        ano: ingreso.data().ano,
        tiempo: ingreso.data().tiempo
    }))

    return {
        props : { ingresos }
    }
}