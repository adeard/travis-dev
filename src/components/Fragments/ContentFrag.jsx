import React from 'react'
import { Layout, theme } from 'antd';
import ContentElement from '../Elements/Content/ContentElement'
import Foot from '../Elements/Footer/Foot';
import BreadcrumbMenu from '../Elements/Breadcrumb/BreadcrumbMenu';

const ContentFrag = (props) => {
    const {children, path} = props

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Layout className="layout">
                <ContentElement>
                    <BreadcrumbMenu path={path} />
                    <div
                        className="site-layout-content"
                        style={{
                        padding: 24,
                        minHeight: 500,
                        background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </ContentElement>
            </Layout>
            <Foot></Foot>
        </>
    )
}

export default ContentFrag