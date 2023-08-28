import React, { useEffect } from 'react'
import  { useNavigate } from 'react-router-dom'
import ContentLayout from '../components/Layouts/ContentLayout'

export default function HomePage() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    useEffect(() => {
        if (token === null) {
            navigate('/auth/login');
        }     
    })

    return (    
        <ContentLayout current_page="home">
            Homepage
        </ContentLayout>
    )
}
