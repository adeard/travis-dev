import React from 'react'
import ContentLayout from '../components/Layouts/ContentLayout'
import InformationDeliveryLayout from '../components/Layouts/InformationDeliveryLayout'


const InformationDeliveryPage = () => {
    return (
        <ContentLayout current_page="information delivery">
            <InformationDeliveryLayout></InformationDeliveryLayout>
        </ContentLayout>
    )
}

export default InformationDeliveryPage