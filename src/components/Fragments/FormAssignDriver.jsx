import React from 'react'
import { Form } from 'antd';
import Index from '../Elements/Input/Index';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormAssignDriver = () => {
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
            autoComplete="off"
        >
            <Index type="text" label="Supir" name="supir" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="Plat" name="plat" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="textarea" label="Remark Ke Supir" name="remark_to_driver" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>
        </Form>
    )
}

export default FormAssignDriver