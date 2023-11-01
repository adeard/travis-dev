import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (!token) { window.location.href = "/Travis/auth/login"}
    // }, [])
    useEffect(() => {       
        const token = localStorage.getItem('token')
        if (!token) { navigate('/auth/login')}
        // eslint-disable-next-line
    }, [])

    return "loggedin"
}