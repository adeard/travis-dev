import React,{useState} from 'react'
import { Form, Input, Radio, Space, Button, Modal } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormRejectTask = (props) => {
    const {task_id} = props
    const [value, setValue] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button shape="round" size="small" type="primary" onClick={showModal} danger>Reject</Button>
            <Modal 
                    title="Tambah Kendaraan" 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    footer={null}
                    >
                <p><b> Task Id : </b>{task_id}</p>
                <Form
                    name="reject_form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Alasan Reject" name="reject_reason">
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

export default FormRejectTask