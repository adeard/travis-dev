import React, { useEffect, useState } from 'react'
import { Form, Select, Modal, Button } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import { getVehicleType, addVehicle } from '../../api/vehicle.service';

const FormAddVehicle = () => {
    const { Option } = Select;
    const [loadings, setLoadings] = useState(false);
    const [vehicletypes, setVehicleTypes] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setLoadings(true)
        addVehicle(values, (result) => {
            setIsModalOpen(false);
            setLoadings(false)
        })        
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        getVehicleType((result) => {
            setVehicleTypes(result)
        })
    }, [])

    return (
        <>
            <Button type="primary" onClick={showModal}>Tambah Kendaraan</Button> 
            <Modal 
                title="Tambah Kendaraan" 
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
                    autoComplete="off">

                    <InputForm type="text" label="Vendor ID" name="vendor_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]} />

                    <InputForm type="text" label="User ID" name="user_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}></InputForm>

                    <InputForm type="text" label="Vehicle ID" name="vehicle_id" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}></InputForm>

                    <InputForm type="text" label="Vehicle No" name="vehicle_no" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}></InputForm>

                    <Form.Item label="Vehicle Type" name="vehicle_type" rules={[
                        {
                        required: true,
                        message: 'Please input first !',
                        },
                    ]}>
                        <Select>
                            {vehicletypes.length > 0 && vehicletypes.map((vehicletype) => (
                                <Option key={vehicletype.vehicle_type} value={vehicletype.vehicle_type}>{vehicletype.vehicle_type} - {vehicletype.vehicle_type_name}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>

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

export default FormAddVehicle