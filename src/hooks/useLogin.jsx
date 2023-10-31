import { useEffect } from "react"

export const useLogin = () => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) { window.location.href = "auth/login"}
    }, [])

    return "loggedin"
}