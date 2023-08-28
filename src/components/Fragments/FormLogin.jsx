import React from 'react'
import { Form, Input } from 'antd';
import  { useNavigate } from 'react-router-dom'
import ButtonElement from '../Elements/Button/Button';
import Api from '../../api';

const FormLogin = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        Api.post('api/v1/auth/sign_in', {
            username: values.username,
            password: values.password,
            domain:"indofood",
            ldap:true
        })
        .then(function (response) {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.Token)
                navigate('/')
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}                
            >
                <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}                
            >
                <Input type="password" />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 2,
                    span: 15,
                }}
            >
                <ButtonElement>Submit</ButtonElement>
            </Form.Item>

        </Form>
    )
}

export default FormLogin