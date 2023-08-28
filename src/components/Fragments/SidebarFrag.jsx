import React from 'react'
import { MailOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;

const menu_list = [
    {
        label: <Link to='/'>Home</Link>,
        key: 'home',
        icon: <MailOutlined />,
    },
    {
        label: <Link to='/assignment'>Assignment</Link>,
        key: 'assignment',
        icon: <MailOutlined />,
    },
    {
        label: <Link to='/master'>Master</Link>,
        key: 'master',
        icon: <MailOutlined />,
    },
]

const SidebarFrag = (props) => {    
    const {collapsed, current_page} = props;
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <h1>TRAVIS</h1>
            <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[current_page]} 
            items={menu_list}
            />
        </Sider>
    )
}

export default SidebarFrag