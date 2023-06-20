import React from 'react'
import { Layout } from 'antd';
import ContentElement from '../Elements/Content/ContentElement'
import Foot from '../Elements/Footer/Foot';

const ContentFrag = (props) => {
    const {children} = props
    return (
        <>
            <Layout className="layout">
                <ContentElement>{children}</ContentElement>
            </Layout>
            <Foot></Foot>
        </>
    )
}

export default ContentFrag