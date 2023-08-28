import React from 'react'
import { Form } from 'antd';
import Index from '../Elements/Input/Index';
import ButtonElement from '../Elements/Button/Button';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const FormLogin = () => {
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

            <Index type="text" label="Username" name="username" rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}></Index>

            <Index type="password" label="Password" name="password" rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}></Index>

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