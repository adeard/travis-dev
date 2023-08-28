import {React} from 'react'
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const items = [
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

const NavMenu = (props) => {
    const {current} = props

    return (
        <Menu 
            style={{ display: 'block' }}
            // onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={items} 
        />
    )
}

export default NavMenu