import React from 'react'
import ContentFrag from '../Fragments/ContentFrag';
import HeaderFrag from '../Fragments/HeaderFrag';

const HomeLayout = (props) => {

    const {children} = props
    return (
        <>
            <HeaderFrag></HeaderFrag>
            <ContentFrag>{children}</ContentFrag>
        </>
    )
}

export default HomeLayout