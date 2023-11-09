import React from 'react'
import ContentLayout from '../components/Layouts/ContentLayout'
import HomeLayout from '../components/Layouts/HomeLayout';

export default function HomePage() {     
    return (    
        <ContentLayout current_page="home">
            <HomeLayout></HomeLayout>
        </ContentLayout>
    )
}
