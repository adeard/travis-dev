import React, { useState } from 'react'
import { Form, Button, Modal } from 'antd';
import InputForm from '../Elements/Input/InputForm';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormAssignDriver = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button shape="round" size="small" type="primary" onClick={showModal}>Assign</Button>
            <Modal 
                    title="Tambah Kendaraan" 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    footer={null}
                    >
                <Form
                    name="assign_driver"
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
                    <InputForm type="text" label="Supir" name="driver" rules={[
                                {
                                required: true,
                                message: 'Please input first !',
                                },
                    ]}></InputForm>

                    <InputForm type="text" label="Plat" name="plat" rules={[
                                {
                                required: true,
                                message: 'Please input first !',
                                },
                    ]}></InputForm>

                    <InputForm type="textarea" label="Remark Ke Supir" name="remark_to_driver" rules={[
                                {
                                required: true,
                                message: 'Please input first !',
                                },
                    ]}></InputForm>

                    <Form.Item wrapperCol={{offset: 20, span: 15}} style={{paddingTop:30, marginBottom:1}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormAssignDriver