import React, { useEffect, useState } from 'react'
import { Form, Select, Modal, Button, Alert } from 'antd';
import InputForm from '../Elements/Input/InputForm';
import { getVehicleType, addVehicle } from '../../api/vehicle.service';

const FormAddVehicle = (props) => {
    const { Option } = Select;
    const [loadings, setLoadings] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vehicletypes, setVehicleTypes] = useState([])
    const [alertMessage, setAlertMessage] = useState("");
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        const serializedData = localStorage.getItem("logged_user");
        let loggedUser = JSON.parse(serializedData);

        values.vendor_id = loggedUser.code.split("_")[1]

        setLoadings(true)

        addVehicle(values, (status, result) => {

            setLoadings(false)

            if (!status) {
                setAlertMessage(<Alert message="Vehicle No Already Exist !" type="error" />)
                console.log(result.message)
            } else {
                setIsModalOpen(false);
                setAlertMessage("")
                
                props.isUpdate(true)
            }
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
                    name="add_vehicle"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">

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
                        <Select placeholder="Type - Name">
                            {vehicletypes.length > 0 && vehicletypes.map((vehicletype) => (
                                <Option key={vehicletype.vehicle_type} value={vehicletype.vehicle_type}>{vehicletype.vehicle_type} - {vehicletype.vehicle_type_name}</Option>
                            ))}                    
                        </Select>
                    </Form.Item>

                    {alertMessage}

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