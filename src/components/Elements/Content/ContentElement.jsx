import React from 'react'
import { Layout, theme } from 'antd';
import BreadcrumbMenu from '../Breadcrumb/BreadcrumbMenu';

const { Content } = Layout;

const ContentElement = (props) => {

    const {children} = props

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content
            style={{
            padding: '0 50px',
            }}
        >
            <BreadcrumbMenu />
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
            
        </Content>
    )
}

export default ContentElement