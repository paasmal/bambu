import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from './authContext'

export default function PrivateRoute({ type, children }){
    const router = useRouter()
    const { logged, listo } = useContext(AuthContext)

    if(type == 'sesion' && listo){
        if(logged) typeof window !== 'undefined' && router.push('/user')
        else return children
    }

    if(type == 'private' && listo){
        if(logged) return children
        else typeof window !== 'undefined' && router.push('/')
    }
    
    return <p>Cargando...</p>
}