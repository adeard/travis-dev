import React,{useState} from 'react'
import { Button, Modal, Form, Input, Radio, Space } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

export default function RejectTask() {
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
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <Button type="default" onClick={showModal}>Reject Task</Button>                
            <Modal 
            title="Reject Task" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            >
                <p><b> Task Id : </b>58912372810</p>
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
                    label="Alasan Reject"
                    name="reject_reason"                    
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical" >
                                <Radio value={1}>Tidak ada armada kendaraan</Radio>
                                <Radio value={2}>Tidak ada akses ke lokasi pengiriman</Radio>
                                <Radio value={3}>
                                Lain - lain
                                {value === 3 ? (
                                    <Input.TextArea
                                    style={{
                                        width: 300,
                                        marginLeft: 10,
                                    }}
                                    />
                                ) : null}
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
