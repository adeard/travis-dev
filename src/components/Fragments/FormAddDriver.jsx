import React from 'react'
import { Form } from 'antd';
import Index from '../Elements/Input/Index';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormAddDriver = () => {
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
            <Index type="text" label="User ID" name="user_id" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="Vendor ID" name="vendor_id" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="Driver ID" name="driver_id" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="Driver Name" name="driver_name" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="KTP" name="ktp" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="No HP" name="no_hp" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>

            <Index type="text" label="Vehicle ID" name="vehicle_id" rules={[
                {
                required: true,
                message: 'Please input first !',
                },
            ]}></Index>
        </Form>
    )
}

export default FormAddDriver