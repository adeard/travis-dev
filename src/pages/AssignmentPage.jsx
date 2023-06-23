import React from 'react'
import AssignmentLayout from '../components/Layouts/AssignmentLayout';
import ContentLayout from '../components/Layouts/ContentLayout'

export default function Assignment() {
    return (
        <ContentLayout current_page="assignment">
            <AssignmentLayout></AssignmentLayout>
        </ContentLayout>
    )
}
