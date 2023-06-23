import React from 'react'
import ContentFrag from '../Fragments/ContentFrag';
import HeaderFrag from '../Fragments/HeaderFrag';

const ContentLayout = (props) => {

    const {children, current_page} = props
    return (
        <>
            <HeaderFrag current_page={current_page}></HeaderFrag>
            <ContentFrag path={current_page}>{children}</ContentFrag>
        </>
    )
}

export default ContentLayout