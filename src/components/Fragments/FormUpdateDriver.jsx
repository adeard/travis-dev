import React, { useState } from 'react'
import { Form, Button, Modal, Select } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import { getDrivers } from '../../api/driver.service';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormUpdateDriver = () => {
    const { Option } = Select;
    const [drivers, setDrivers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let request_params = {
        page : 1,
    }

    const showModal = () => {
        getDrivers(request_params, (result) => {
            setDrivers(result);
        })
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button shape="round" size="small" type="primary" onClick={showModal}>Update</Button>
            <Modal 
                    title="Tambah Kendaraan" 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    footer={null}
                    >
                <Form
                    name="update_driver"
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
                    <Form.Item label="Supir" name="driver" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Select placeholder="Driver Name - Phone No">
                            {drivers.length > 0 && drivers.map((driver) => (
                                <Option key={driver.driver_id} value={driver.driver_id}>{driver.driver_name} - {driver.no_hp}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>

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

export default FormUpdateDriver