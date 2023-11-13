import React from 'react'
import { Form, notification } from 'antd';
import ButtonElement from '../Elements/Button/Button';
import { login, getLoggedUser } from '../../api/auth.service';
import InputForm from '../Elements/Input/InputForm';

const FormLogin = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type, title = "", message = "") => {
        api[type]({
            message: title,
            description: message,
        });
    };

    const onFinish = (values) => {
        values.ldap = false
        values.domain = "indofood"
        login(values, (status, token) => {
            if (status && token) {
                localStorage.setItem('token', token)                
                getLoggedUser((status, result) => {
                    if (status && result) {
                        localStorage.setItem('logged_user', JSON.stringify(result))
                        window.location.href = "/Travis"
                    } else {
                        openNotificationWithIcon('error', "", result)
                    }
                })
            } else {
                openNotificationWithIcon('error', "", "Invalid User LDAP")
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        {contextHolder}
        <Form
            name="login_form"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='login_form'
            >

            <InputForm name="username" label="Username" rules={[{
                required: true,
                message: 'Please input your username!',
            }]} />
            <InputForm type="password" name="password" label="Password" rules={[{
                required: true,
                message: 'Please input your password!',
            }]} />

            <Form.Item wrapperCol={{offset: 2, span: 15}}>
                <ButtonElement>Login</ButtonElement>
            </Form.Item>
        </Form>
        </>
    )
}

export default FormLogin