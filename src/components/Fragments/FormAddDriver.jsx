import React, {useState} from 'react'
import { Form, Modal, Button } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import { addDriver } from '../../api/driver.service';

const FormAddDriver = () => {    
    const [loadings, setLoadings] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setLoadings(true)
        addDriver(values, (status, result) => {
            if (status === 200) {
                setIsModalOpen(false);            
            } else {
                
            }
            setLoadings(false)
        })   
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>Tambah Supir</Button> 
            <Modal 
                title="Tambah Supir" 
                open={isModalOpen} 
                onCancel={handleCancel} 
                footer={null}
                >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <InputForm type="text" label="User ID" name="user_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="Vendor ID" name="vendor_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="Driver ID" name="driver_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="Vehicle ID" name="vehicle_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="Username" name="username" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="password" label="Password" name="password" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="Driver Name" name="driver_name" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="KTP" name="ktp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="No HP" name="no_hp" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    

                    <Form.Item wrapperCol={{offset: 20, span: 15}} style={{paddingTop:30, marginBottom:1}}>
                        <Button type="primary" htmlType="submit" loading={loadings}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormAddDriver