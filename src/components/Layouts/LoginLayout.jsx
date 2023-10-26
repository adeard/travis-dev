import React from 'react'
import FormLogin from '../Fragments/FormLogin'
import './LoginLayout.css'
import { Card } from 'antd'
import logo from './../../travis_logo.png'

const LoginLayout = () => {
    return (
        <header className="App App-header">
            <img src={logo} alt='' style={{marginBottom:"20px", marginRight:"30px"}} />
            <Card style={{ width: 300, }}>
                <FormLogin></FormLogin>        
            </Card>
        </header>
    )
}

export default LoginLayout