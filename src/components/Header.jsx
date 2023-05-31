import { React, useState } from 'react'
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items = [
    {
      label: <a href='/'>Home</a>,
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: <a href='/assignment'>Assignment</a>,
      key: 'assignment',
      icon: <MailOutlined />,
    },
    {
        label: <a href='/master'>Master</a>,
        key: 'master',
        icon: <MailOutlined />,
    },
    {
        label: 'About Us',
        key: 'aboutus',
        icon: <MailOutlined />,
    },
    {
        label: 'Sign Out',
        key: 'sign_out',
        icon: <UserOutlined />,
        style: { float: 'right' }
    },
]

export default function Head() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
            <Header
            style={{
                alignItems: 'center',
                backgroundColor:'white'
            }}
            >
            <Menu 
                style={{ display: 'block' }}
                onClick={onClick} 
                selectedKeys={[current]} 
                mode="horizontal" 
                items={items} 
            />
            </Header>
    )
}
