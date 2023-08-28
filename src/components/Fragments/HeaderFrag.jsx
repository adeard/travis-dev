import { React, useState } from 'react'
import { Layout, theme, Button } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const { Header } = Layout;

const HeaderFrag = (props) => {
    const {collapseTrigger} = props
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const sendDataToParent = () => {
        setCollapsed(!collapsed)
        collapseTrigger(collapsed);
      };
    
    return (
        <Header
        style={{
            padding: 0,
            background: colorBgContainer,
        }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={sendDataToParent}
                style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                }}
            />

            <Button
                type="text"
                icon={<UserOutlined />}
                style={{
                fontSize: '12px',
                width: 100,
                height: 64,
                float: "right"
                }}
            >Sign Out</Button>
        </Header>
    )
}

export default HeaderFrag