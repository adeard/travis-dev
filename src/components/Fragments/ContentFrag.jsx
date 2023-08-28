import React from 'react'
import { theme } from 'antd';
import ContentElement from '../Elements/Content/ContentElement'
import BreadcrumbMenu from '../Elements/Breadcrumb/BreadcrumbMenu';

const ContentFrag = (props) => {
    const {children, path} = props

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <ContentElement>
            <BreadcrumbMenu path={path} />
            <div
                className="site-layout-content"
                style={{
                padding: 24,
                minHeight: 400,
                background: colorBgContainer,
                }}
            >
                {children}
            </div>
        </ContentElement>
    )
}

export default ContentFrag