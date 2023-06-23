import { React } from 'react'
import { Layout } from 'antd';
import NavMenu from '../Elements/Menu/NavMenu';

const { Header } = Layout;

const HeaderFrag = (props) => {
  const {current_page} = props
  return (
    <Header
        style={{
            alignItems: 'center',
            backgroundColor:'white'
        }}
        >
        <NavMenu current={current_page}></NavMenu>
    </Header>
  )
}

export default HeaderFrag