import React,{ useState } from 'react'
import { Button, Form, Input, Modal } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function AssignDriver() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button type="default" onClick={showModal}>Assign Supir</Button>                
            <Modal title="Assign Supir" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                    <Form.Item
                    label="Supir"
                    name="supir"
                    rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Plat"
                    name="plat"
                    rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Remark Ke Supir"
                    name="remark_to_driver"
                    rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}
                    >
                    <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
