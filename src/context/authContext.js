import { createContext, useEffect, useState } from "react";

const AuthProvider = createContext()
const AuthContext = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })

    const token = auth.token

    useEffect(() => {
       const data = localStorage.getItem('auth')
       if (data) {
        const loginData = JSON.parse(data)
        setAuth({
            user: loginData.user,
            token: loginData.token
        })
       }
    }, [])

    return (
        <AuthProvider.Provider value={[auth, setAuth]}>
             {children}
        </AuthProvider.Provider>
    )
}

 export {AuthProvider, AuthContext}