import { React, useState } from 'react'
import { Layout, theme, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const { Header } = Layout;

const HeaderFrag = (props) => {
    const navigate = useNavigate();
    const {collapseTrigger} = props
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const sendDataToParent = () => {
        setCollapsed(!collapsed)
        collapseTrigger(collapsed);
    };

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/auth/login')
    }
    
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
                onClick={handleSignOut}
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