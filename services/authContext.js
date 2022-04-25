import React, { useEffect, useState } from 'react'

import { auth } from './dbase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
    const [sesion, setSesion] = useState({ 
        logged: false, 
        user: undefined, 
        listo: false 
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setSesion({
                  logged: true,
                  user,
                  listo: true
                })
            } else {
                setSesion({
                  logged: false,
                  user: undefined,
                  listo: true
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={ sesion } >
            {children}
        </AuthContext.Provider>
    )
}