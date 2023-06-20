import { React } from 'react'
import { Layout } from 'antd';
import NavMenu from '../Elements/Menu/NavMenu';

const { Header } = Layout;

const HeaderFrag = () => {
  return (
    <Header
        style={{
            alignItems: 'center',
            backgroundColor:'white'
        }}
        >
        <NavMenu></NavMenu>
    </Header>
  )
}

export default HeaderFrag